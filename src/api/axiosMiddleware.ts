import axios, { AxiosError } from "axios";
import { getCookie } from "cookies-next";

// constants
import { UNAUTHORIZED_CODES, TOKEN_ID, CSRF_TOKEN_ID } from "api/constants";

const instance = axios.create({
  headers: {
    "Content-Type": "application/json",
    
  },
  
  baseURL: `${process.env.NEXT_PUBLIC_CLIENT_URL}/${process.env.NEXT_PUBLIC_API_VERSION}`,
});

instance.interceptors.request.use(
  (config) => {
    const token = getCookie(TOKEN_ID);
    const csrfToken = getCookie(CSRF_TOKEN_ID);
    if (token) {
      // Configure this as per your backend requirements
      config.headers.Authorization = `Bearer ${token}`;
    }

    // if (csrfToken) {
    //   config.headers["X-CSRF-TOKEN"] = csrfToken;
    // }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error: AxiosError) {
    const statusCode = error.response?.status;
    const isTokenInvalid =
      statusCode && UNAUTHORIZED_CODES.includes(statusCode);
    if (isTokenInvalid && typeof window !== "undefined") {
      window.location.href = `/login?status=${statusCode}`;
    }
    return Promise.reject(error);
  }
);

export default instance;
