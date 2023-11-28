import { FC } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

// material ui
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

// project imports
import TextField from "components/FormikComponents/FormikTextField";
import CircularLoading from "components/CircularLoading";

// utils
import { formatDuration, getLocaleDate } from "utils";

// constants
import { UpdateNavigationData } from "types/navigation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Необходимо указать название"),
});

interface Props {
  details: Track | undefined;
  updateItem: (data: UpdateNavigationData) => void;
  handleFormClose: () => void;
}

const TrackInfoBar: FC<Props> = ({ details, updateItem, handleFormClose }) => {
  const initialValues = details ? details : ({} as Track);

  return (
    <Stack height="100%">
      {details ? (
        <Formik
          initialValues={initialValues}
          enableReinitialize
          validationSchema={validationSchema}
          onSubmit={(values) => {
            updateItem({ title: values.title });
          }}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            touched,
            values,
          }) => (
            <form
              onSubmit={handleSubmit}
              className="perfect-scrollbar"
              style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ padding: "6px" }}>
                <img
                  src={details.thumbnail}
                  alt={details.title}
                  width="100%"
                  style={{ minHeight: 120, objectFit: "cover" }}
                />
              </div>
              <Stack
                width="100%"
                height="calc(100vh - 191px)"
                justifyContent="space-between"
              >
                <Stack justifyContent="center" gap={3} px={2.5} py={3}>
                  <Box display="flex" width="100%" gap={1}>
                    <TextField
                      label="Название"
                      value={values.title}
                      name="title"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      touchedTitle={touched.title}
                      errorsTitle={errors.title}
                    />

                    <TextField
                      value={values.video_id}
                      name="video_id"
                      label="ID трека"
                      onBlur={handleBlur}
                      // onChange={handleChange}
                      touchedTitle={touched.video_id}
                      errorsTitle={errors.video_id}
                    />
                  </Box>

                  {/* description block */}
                  {/* <TextField
                  inputProps={{
                    style: {
                      padding: 15,
                    },
                  }}
                  value={values.description}
                  onChange={handleChange}
                  fullWidth
                  multiline
                  rows={isChannelDetails ? 15 : 10}
                  name="description"
                  label="Description"
                  touchedTitle={touched.description}
                  errorsTitle={errors.description}
                  InputProps={{
                    sx: {
                      "& .MuiOutlinedInput-input::-webkit-scrollbar": {
                        width: "10px",
                        background: "transparent",
                      },
                      "& .MuiOutlinedInput-input::-webkit-scrollbar-thumb": {
                        height: "56px",
                        borderRadius: "8px",
                        border: "2px solid transparent",
                        backgroundClip: "content-box",
                        backgroundColor: "hsl(0, 0%, 37%)",
                        cursor: "pointer",
                      },
                    },
                  }}
                /> */}

                  <Box display="flex" width="100%" gap={1}>
                    <TextField
                      disabled
                      label="Длительность в секундах"
                      value={formatDuration(values.duration_in_seconds)}
                      name="duration_in_seconds"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      touchedTitle={touched.duration_in_seconds}
                      errorsTitle={errors.duration_in_seconds}
                    />

                    <TextField
                      disabled
                      value={values.duration_readable}
                      name="duration_readable"
                      label="Общая длительность"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      touchedTitle={touched.duration_readable}
                      errorsTitle={errors.duration_readable}
                    />
                  </Box>

                  <Box display="flex" width="100%" gap={1}>
                    <TextField
                      disabled
                      label="Сегменты"
                      value={values.segment_playlist_file}
                      name="segment_playlist_file"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      touchedTitle={touched.segment_playlist_file}
                      errorsTitle={errors.segment_playlist_file}
                    />

                    <TextField
                      disabled
                      value={values.track_main_color}
                      name="track_main_color"
                      label="Цвет трека"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      touchedTitle={touched.track_main_color}
                      errorsTitle={errors.track_main_color}
                    />
                  </Box>

                  <Box display="flex" width="100%" gap={1}>
                    <TextField
                      disabled
                      label="Дата создания"
                      value={getLocaleDate(values.created_at)}
                      name="created_at"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      touchedTitle={touched.created_at}
                      errorsTitle={errors.created_at}
                    />

                    <TextField
                      disabled
                      value={getLocaleDate(values.updated_at)}
                      name="updated_at"
                      label="Дата обновления"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      touchedTitle={touched.updated_at}
                      errorsTitle={errors.updated_at}
                    />
                  </Box>
                </Stack>
                <Box
                  width="100%"
                  display="flex"
                  justifyContent="space-between"
                  padding="16px 16px"
                  borderTop="1px solid rgba(255, 255, 255, 0.1)"
                >
                  <Box display="flex" gap={2}>
                    <Button
                      disabled={
                        JSON.stringify(values) === JSON.stringify(initialValues)
                      }
                      size="small"
                      type="submit"
                      variant="contained"
                      color="primary"
                    >
                      Изменить
                    </Button>
                    <Button
                      onClick={handleFormClose}
                      size="small"
                      variant="outlined"
                      color="error"
                    >
                      Отмена
                    </Button>
                  </Box>
                </Box>
              </Stack>
            </form>
          )}
        </Formik>
      ) : (
        <CircularLoading />
      )}
    </Stack>
  );
};

export default TrackInfoBar;
