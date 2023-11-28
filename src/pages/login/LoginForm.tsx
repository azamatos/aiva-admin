import { forwardRef } from "react";
import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

// material ui
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

// project imports
import TextField from "components/FormikComponents/FormikTextField";
import { FormPasswordInput } from "components/form-password";
import CircularLoading from "components/CircularLoading";

interface Props {
  submitFormValues: ((
    values: LoginState,
    formikHelpers: FormikHelpers<LoginState>
  ) => void | Promise<any>) &
    ((
      values: LoginState,
      formikHelpers: FormikHelpers<LoginState>
    ) => void | Promise<any>);
  isLoading: boolean;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Необходимо ввести имя пользователя"),
  password: Yup.string().required("Необходимо ввести пароль"),
});

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = forwardRef(function LoginForm(
  { submitFormValues, isLoading }: Props,
  ref
) {
  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      validationSchema={validationSchema}
      onSubmit={submitFormValues}
      validateOnBlur
      validateOnChange
    >
      {({
        errors,
        handleBlur,
        handleChange,
        touched,
        values,
        handleSubmit,
      }) => (
        <Stack gap={3} alignItems="center" width="100%">
          <Typography component="h1" variant="h1">
            Авторизация
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              display: "flex",
              gap: 2,
              flexDirection: "column",
              width: "100%",
            }}
          >
            <TextField
              errorsTitle={errors.email}
              touchedTitle={touched.email}
              inputProps={{
                style: {
                  padding: 15,
                },
              }}
              inputRef={ref}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              fullWidth
              type="text"
              name="email"
              label="Имя пользователя"
            />

            <FormPasswordInput
              errorsTitle={errors.password}
              touchedTitle={touched.password}
              name="password"
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
            />

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Запомнить меня"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ height: 50 }}
            >
              {isLoading ? (
                <CircularLoading color="inherit" size={30} />
              ) : (
                <Typography
                  fontSize={18}
                  textTransform="uppercase"
                  fontWeight={500}
                >
                  Войти
                </Typography>
              )}
            </Button>
          </Box>
        </Stack>
      )}
    </Formik>
  );
});

export default LoginForm;
