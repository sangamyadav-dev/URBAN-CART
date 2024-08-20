/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useMemo, useState } from "react";
import MaterialReactTable from "material-react-table";
import { Button, IconButton, Tooltip } from "@mui/material";
import { FiEye, FiTrash } from "react-icons/fi";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export const Table = ({
  data,
  fields,
  numberOfRows,
  enableTopToolBar,
  enableBottomToolBar,
  enablePagination,
  enableRowSelection,
  enableColumnFilters,
  enableEditing,
  enableColumnDragging,
  showPreview,
  routeLink,
}) => {
  const columns = useMemo(() => fields, []);

  const [tableData, setTableData] = useState(() => data);

  const handleDeleteRow = useCallback(
    (row) => {
      if (!confirm("Are you sure you want to delete")) {
        return;
      }
      data.splice(row.index, 1);
      setTableData([...tableData]);
    },
    [tableData]
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={tableData.slice(0, numberOfRows)}
      getRowId={(row) => row.id}
      enableEditing={enableEditing}
      enableColumnDragging={enableColumnDragging}
      enableColumnOrdering
      enableRowSelection={enableRowSelection}
      enableColumnFilters={enableColumnFilters}
      enablePagination={enablePagination}
      enableBottomToolbar={enableBottomToolBar}
      enableTopToolbar={enableTopToolBar}
      renderRowActions={({ row }) => (
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Tooltip arrow placement="right" title="Delete">
            <IconButton color="error" onClick={() => handleDeleteRow(row)}>
              <FiTrash />
            </IconButton>
          </Tooltip>
          {showPreview && routeLink && (
            <Tooltip arrow placement="right" title="View">
              <Link to={`/${routeLink}/${row.id}`}>
                <IconButton>
                  <FiEye />
                </IconButton>
              </Link>
            </Tooltip>
          )}
        </Box>
      )}
      renderTopToolbarCustomActions={() => (
        <Button
          disableElevation
          color="error"
          // disabled={!table.getIsSomeRowsSelected()}
          variant="contained"
          // onClick={handleDelete}
        >
          Delete Selected
        </Button>
      )}
      muiTableBodyRowProps={{ hover: false }}
      muiTablePaperProps={{
        sx: {
          padding: "20px",
          borderRadius: "15px",
          borderStyle: "solid",
          borderWidth: "1px",
          borderColor: "divider",
        },
      }}
      muiTableContainerProps={{
        sx: { borderRadius: "15px" },
      }}
      muiTableHeadCellProps={{
        sx: {
          fontSize: "14px",
          fontWeight: "bold",
        },
      }}
      muiTableHeadProps={{
        sx: {
          "& tr th": {
            borderWidth: "1px",
            borderColor: "divider",
            borderStyle: "solid",
          },
        },
      }}
      muiTableBodyProps={{
        sx: {
          "& tr td": {
            borderWidth: "1px",
            borderColor: "divider",
            borderStyle: "solid",
          },
        },
      }}
    />
  );
};

Table.propTypes = {
  data: PropTypes.array.isRequired,
  fields: PropTypes.array.isRequired,
  numberOfRows: PropTypes.number,
  enableTopToolBar: PropTypes.bool,
  enableBottomToolBar: PropTypes.bool,
  enablePagination: PropTypes.bool,
  enableRowSelection: PropTypes.bool,
  enableColumnFilters: PropTypes.bool,
  enableEditing: PropTypes.bool,
  enableColumnDragging: PropTypes.bool,
  showPreview: PropTypes.bool,
  routeLink: PropTypes.string,
};

export default Table;
