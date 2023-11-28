import { useState } from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

// material ui
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

// project imports
import SettingsList from "./settings-list";
import StorageBlock from "./storage-block";

// utils
import { ssrError } from "utils/errorWrapper";

// services
import { settingsService } from "services/settings";

// constants
import { TOKEN_ID } from "api/constants";

// types
import { SettingsType, StorageInfo } from "types/settings";

const settingItems = [
  {
    id: "storage" as SettingsType,
    title: "Данные о хранилище",
  },
];

interface Props {
  storageInfo: StorageInfo;
}

function SettingsPage({ storageInfo }: Props) {
  const theme = useTheme();

  const [selectedBlock, setSelectedBlock] = useState<SettingsType>("storage");

  const handleSelect = (blockId: SettingsType) => {
    setSelectedBlock(blockId);
  };

  return (
    <Box
      width="100%"
      height="calc(100vh - 130px)"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        width={960}
        height={620}
        sx={{
          backgroundColor: theme.palette.background.paper,
          borderRadius: 1,
        }}
      >
        <Box
          width="100%"
          height={64}
          px={2}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Typography fontSize={20} fontWeight={500}>
            Настройки
          </Typography>
        </Box>
        <Divider />
        <Box display="flex" height="calc(100% - 64px)">
          <SettingsList
            selectedBlock={selectedBlock}
            items={settingItems}
            handleSelect={handleSelect}
          />

          {selectedBlock === "storage" && (
            <StorageBlock storageInfo={storageInfo} />
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default SettingsPage;

export const getServerSideProps: GetServerSideProps = async ({
  req,
}: GetServerSidePropsContext) => {
  const token = req.cookies[TOKEN_ID];

  try {
    const storageInfo = await settingsService.getStorageInfo(token);

    return {
      props: {
        storageInfo,
      },
    };
  } catch (err) {
    return ssrError(err);
  }
};
