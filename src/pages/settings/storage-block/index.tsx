import { FC } from "react";
import { PieChart } from "react-minimal-pie-chart";

// material ui
import Stack from "@mui/material/Stack";

// types
import { StorageInfo } from "types/settings";

interface Props {
  storageInfo: StorageInfo;
}

const StorageBlock: FC<Props> = ({ storageInfo }) => {
  return (
    <Stack justifyContent="space-between" width="100%" margin={4}>
      <PieChart
        label={({ dataEntry }) =>
          `${dataEntry.title}: ${Math.round(dataEntry.percentage)}%`
        }
        labelStyle={{ fontSize: 6, color: "red", padding: 12 }}
        animate
        data={[
          { title: "One", value: 10, color: "#E38627" },
          { title: "Two", value: 15, color: "#C13C37" },
          { title: "Three", value: 20, color: "#6A2135" },
        ]}
      />
    </Stack>
  );
};

export default StorageBlock;
