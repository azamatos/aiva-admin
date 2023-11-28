import { ChangeEvent, FC, MouseEvent, useMemo, useState, useRef } from "react";

// material-ui
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

// project imports
import EnhancedTablePagination from "components/MainTable/EnhancedTablePagination";
import EnhancedTableToolbar from "components/MainTable/EnhancedTableToolbar";
import EnhancedTableBody from "components/MainTable/EnhancedTableBody";
import EnhancedTableHead from "components/MainTable/EnhancedTableHead";
import CircularLoading from "components/CircularLoading";

// utils
import { getComparator } from "utils/comparator";

// types
import { ContentType } from "types/navigation";

const columnGroup = (
  <colgroup>
    <col style={{ width: 120 }} />
    <col />
    <col style={{ width: 450 }} />
    <col style={{ width: 200 }} />
  </colgroup>
);

interface Props {
  items: any;
  handlePageData: (value: number) => void;
  handleQuery: (query: string) => void;
  query: string;
  page: number;
  totalCount: number;
  pageType: PageType;
  handleCellClick: (item: string | number) => void;
}

const MainTable: FC<Props> = ({
  items,
  handlePageData,
  handleQuery,
  query,
  page,
  totalCount,
  pageType,
  handleCellClick,
}) => {
  const [orderBy, setOrderBy] = useState<string>("title");
  const [order, setOrder] = useState<Order>("asc");
  const scrollTopRef = useRef<HTMLDivElement | null>(null);

  const handleRequestSort = (event: MouseEvent<unknown>, property: string) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property as any);
  };

  const visibleRows = useMemo(
    () => items?.sort(getComparator(order, orderBy)) || ([] as any),
    [order, orderBy, items]
  );

  const onValueChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    handleQuery(event.target.value);
  };

  const clearSearch = () => {
    handleQuery("");
  };

  const handlePageDataWithScroll = (value: number) => {
    scrollTopRef.current?.scrollTo({ top: 0 });
    handlePageData(value);
  };

  return (
    <Paper sx={{ width: "100%" }}>
      <EnhancedTableToolbar
        clearSearch={clearSearch}
        pageType={pageType}
        value={query}
        onValueChange={onValueChange}
      />
      {visibleRows?.length > 0 ? (
        <TableContainer style={{ overflow: "auto" }}>
          <Box paddingRight="17px" borderBottom="1px solid rgba(81, 81, 81, 1)">
            <Table>
              {columnGroup}
              <EnhancedTableHead
                pageType={pageType}
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
              />
            </Table>
          </Box>
          <Box
            ref={scrollTopRef}
            className="perfect-scrollbar"
            sx={{
              height: "calc(100vh - 354px)",
            }}
          >
            <Table style={{ tableLayout: "auto" }}>
              {columnGroup}
              <EnhancedTableBody
                pageType={pageType}
                visibleRows={visibleRows}
                handleCellClick={handleCellClick}
              />
            </Table>
          </Box>
          <EnhancedTablePagination
            handleChangePageData={handlePageDataWithScroll}
            page={page}
            totalCount={totalCount || 0}
          />
        </TableContainer>
      ) : (
        <Box width="100%" height="calc(100vh - 190px)">
          <CircularLoading size={60} />
        </Box>
      )}
    </Paper>
  );
};

export default MainTable;
