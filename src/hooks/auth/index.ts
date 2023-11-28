import { useMutation } from "@tanstack/react-query";
import { setCookie } from "cookies-next";

// services
import authService from "services/auth";

// constants
import { COOKIE_AGE, TOKEN_ID } from "api/constants";

export const useSignIn = () => {
  const { isSuccess, mutate, isLoading, data, isError } = useMutation(
    (data: LoginState) => authService.signIn(data),
    {
      onSuccess: (response: AuthResponse) => {
        if (response) {
          setCookie(TOKEN_ID, response?.token, {
            maxAge: COOKIE_AGE,
          });
        }
      },
    }
  );

  return {
    isSignInSuccess: isSuccess,
    isSignInLoading: isLoading,
    signIn: mutate,
    data,
    isSignInError: isError,
  };
};
