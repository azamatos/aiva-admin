import { FC, useEffect, useRef, useState } from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

// material-ui
import { useTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

// project imports
import LoginForm from "./LoginForm";

// services
import { useSignIn } from "hooks/auth";

// redux
import { useAppDispatch } from "store/hooks/redux";
import { setSnackbarMessage } from "store/reducers/main";
import { useRouter } from "next/router";

interface Props {
  status: string | null;
}

const snackbarText = "Необходима повторная авторизация";

const Login: FC<Props> = ({ status }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const { push } = useRouter();

  const handleOpenSnackbar = () => {
    dispatch(setSnackbarMessage(snackbarText));
  };

  // opening snackbar if error status came with redirect to login page
  useEffect(() => {
    if (status) {
      handleOpenSnackbar();
    }
  }, [status]);

  const [isLoading, setLoading] = useState(false);

  const toggleLoading = () => setLoading((loading) => !loading);

  const { isSignInError, signIn, isSignInSuccess } = useSignIn();

  const handleSubmit = (values: LoginState) => {
    toggleLoading();
    signIn(values);
  };

  useEffect(() => {
    if (isSignInError) {
      inputRef.current?.focus();
      setLoading(false);
    }

    if (isSignInSuccess) {
      push("/dashboard");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSignInError, isSignInSuccess]);

  return (
    <Container component="main" maxWidth="sm">
      <Stack
        sx={{
          backgroundColor: theme.palette.dark[800],
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 8,
          alignItems: "center",
        }}
      >
        <LoginForm
          ref={inputRef}
          isLoading={isLoading}
          submitFormValues={handleSubmit}
        />
      </Stack>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { query } = context;
  const status = query?.status;

  return {
    props: { status: status || null },
  };
};

export default Login;
