import { AxiosError } from "axios";
import { GetServerSidePropsResult, Redirect } from "next";

// constants
import { FORBIDDEN_CODES, UNAUTHORIZED_CODES } from "api/constants";

export const ssrError = (
  error: unknown
): GetServerSidePropsResult<Redirect> => {
  if (error instanceof AxiosError && error.response?.status) {
    const errorStatus = error.response?.status;
    if (UNAUTHORIZED_CODES.includes(errorStatus)) {
      return {
        redirect: {
          destination: `/login?status=${errorStatus}`,
          permanent: false,
        },
      };
    }

    if (FORBIDDEN_CODES.includes(errorStatus)) {
      return {
        notFound: true,
      };
    }
  }
  return {
    redirect: {
      destination: "/500",
      permanent: false,
    },
  };
};
