import { GetServerSidePropsContext } from "next";

// constants
import { TOKEN_ID } from "api/constants";
import axios from "api/axiosMiddleware";
import { ssrError } from "utils/errorWrapper";

const Page = () => {};

// Redirect to '/dashboard' in next.config.js
export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { req, res } = context;
  const token = req.cookies[TOKEN_ID];
  const serverAPI = process.env.NEXT_PUBLIC_CLIENT_URL;

  try {
    if (serverAPI) {
      const response = await axios.get("/sanctum/csrf-cookie", {
        baseURL: serverAPI,
        withCredentials: true,
      });

      const setCookie = response.headers["set-cookie"];
      if (setCookie) {
        res.setHeader("set-cookie", setCookie);
      }
    }
  } catch (err) {
    ssrError(err);
  }
  return {
    redirect: {
      destination: token ? "/dashboard" : "/login",
      permanent: true,
    },
  };
};

export default Page;
