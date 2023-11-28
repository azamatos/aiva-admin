import { FC, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { ColorResult, CirclePicker } from "react-color";

// material ui
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

// project imports
import TextField from "components/FormikComponents/FormikTextField";
import { FormPasswordInput } from "components/form-password";

// constants
import { ACCESS_TYPES } from "api/constants";

// types
import {
  CreateUserData,
  Role,
  UpdateUserData,
  UserActionType,
  UserById,
} from "types/users";
import { ContentAccessType } from "types/content";

const validationSchema = Yup.object().shape({
  avatarColor: Yup.string().required("Необходимо указать цвет пользователя"),
  firstName: Yup.string().required("Необходимо указать имя пользователя"),
  lastName: Yup.string().required("Необходимо указать фамилию пользователя"),
  roleId: Yup.string().required("Необходимо указать роль"),
  login: Yup.string().required("Необходимо указать логин"),
});

const validationSchemaWithPassword = Yup.object().shape({
  password: Yup.string().required("Необходимо указать пароль"),
});

interface Props {
  userInfo: UserById | undefined;
  handleSubmitForm: (
    actionType: UserActionType,
    data: CreateUserData | UpdateUserData
  ) => void;
  handleFormClose: () => void;
  roles: Role[] | undefined;
}

const UserInfoForm: FC<Props> = ({
  userInfo,
  handleSubmitForm,
  handleFormClose,
  roles,
}) => {
  const [avatarColor, setAvatarColor] = useState(userInfo?.avatarColor);

  // handlers
  const handleAvatarColor = (color: ColorResult) => {
    setAvatarColor(color.hex);
  };

  const handleResetForm = (resetForm: any) => {
    handleFormClose();
    setAvatarColor("");
    resetForm();
  };

  const isUpdateAction = userInfo !== undefined && "id" in userInfo;

  const initialValues = {
    avatarColor: userInfo?.avatarColor ?? "",
    firstName: userInfo?.firstName ?? "",
    lastName: userInfo?.lastName ?? "",
    roleId: userInfo?.roleId ?? roles![0].id,
    state: userInfo?.state ?? ContentAccessType.OPENED,
    login: userInfo?.login ?? "",
    password: "",
  };

  return (
    <Stack>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        validationSchema={
          isUpdateAction
            ? validationSchema
            : validationSchema.concat(validationSchemaWithPassword)
        }
        onSubmit={(values: CreateUserData) => {
          if (isUpdateAction) {
            const { password, ...rest } = values;
            handleSubmitForm("update", { ...rest, id: userInfo?.id });
          } else {
            handleSubmitForm("create", values);
          }
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
          touched,
          values,
          resetForm,
        }) => (
          <form onSubmit={handleSubmit} className="perfect-scrollbar">
            <Stack width="100%" height="100vh" justifyContent="space-between">
              <Stack
                justifyContent="center"
                direction="column"
                gap={3}
                px={2.5}
                py={3}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: 10,
                  }}
                >
                  <Avatar
                    sx={{
                      width: 120,
                      height: 120,
                      backgroundColor: avatarColor,
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    gap: 8,
                  }}
                >
                  <TextField
                    label="Имя"
                    value={values.firstName}
                    name="firstName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    touchedTitle={touched.firstName}
                    errorsTitle={errors.firstName}
                  />

                  <TextField
                    value={values.lastName}
                    name="lastName"
                    label="Фамилия"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    touchedTitle={touched.lastName}
                    errorsTitle={errors.lastName}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    gap: 8,
                  }}
                >
                  <TextField
                    label="Роль"
                    value={values.roleId}
                    select
                    name="roleId"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    touchedTitle={touched.roleId}
                    errorsTitle={errors.roleId}
                  >
                    {roles?.map((role) => (
                      <MenuItem key={role.id} value={role.id}>
                        {role.name}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField
                    value={values.state}
                    select
                    name="state"
                    label="Тип доступа"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    touchedTitle={touched.state}
                    errorsTitle={errors.state}
                  >
                    {Object.values(ContentAccessType)?.map((type, index) => (
                      <MenuItem key={index} value={type}>
                        {ACCESS_TYPES[type]}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>

                <TextField
                  label="Логин"
                  value={values.login}
                  name="login"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  touchedTitle={touched.login}
                  errorsTitle={errors.login}
                />
                {!isUpdateAction && (
                  <FormPasswordInput
                    touchedTitle={touched.password}
                    errorsTitle={errors.password}
                    name="password"
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                )}
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <CirclePicker
                    width="97%"
                    color={avatarColor}
                    onChange={handleAvatarColor}
                    onChangeComplete={(color) => {
                      setFieldValue("avatarColor", color.hex);
                    }}
                  />
                </div>
              </Stack>
              <Box
                width="100%"
                display="flex"
                justifyContent="space-between"
                padding="16px"
                borderTop="1px solid rgba(255, 255, 255, 0.1)"
              >
                <Button
                  disabled={
                    JSON.stringify(values) === JSON.stringify(initialValues)
                  }
                  size="small"
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  {isUpdateAction ? "Изменить " : "Создать"}
                </Button>
                <Button
                  onClick={handleResetForm.bind(null, resetForm)}
                  size="small"
                  variant="outlined"
                  color="error"
                >
                  Отмена
                </Button>
              </Box>
            </Stack>
          </form>
        )}
      </Formik>
    </Stack>
  );
};

export default UserInfoForm;
