import { ChangeEvent, FC, MouseEvent } from "react";

// material ui
import TablePagination from "@mui/material/TablePagination";

// redux
import { useAppDispatch, useAppSelector } from "store/hooks/redux";
import { setContentLimit } from "store/reducers/main";

interface Props {
  totalCount: number;
  page: number;
  handleChangePageData: (value: number) => void;
}

const EnhancedTablePagination: FC<Props> = ({
  totalCount,
  page,
  handleChangePageData,
}) => {
  const dispatch = useAppDispatch();

  const contentLimit = useAppSelector((state) => state.layout.contentLimit);

  const handleChangeRowsPerPage = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch(setContentLimit(Number(event.target.value)));
  };

  const handleChangePage = (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent> | null,
    page: number
  ) => {
    handleChangePageData(page);
  };

  return (
    <TablePagination
      rowsPerPageOptions={[10, 15, 20]}
      component="div"
      count={totalCount}
      rowsPerPage={contentLimit}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
};

export default EnhancedTablePagination;
