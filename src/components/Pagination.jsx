import styles from "../CategoryPage/CategoryPage.module.css";
import {TablePagination} from "@mui/material";
import PropTypes from 'prop-types';

export const Pagination = (props) => {

  Pagination.propTypes = {
    setIsLoading: PropTypes.func,
    setPage: PropTypes.func,
    page: PropTypes.number.isRequired,
    setRows: PropTypes.func,
    rows: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
  }

  const setIsLoading = props.setIsLoading
  const setPage = props.setPage
  const page = props.page
  const setRows = props.setRows
  const rows = props.rows
  const total = props.total

  return (
      <div className={styles.paginationContainer}>
        <TablePagination
            count={total}
            page={page}
            onPageChange={
              (e, num) => {
                setIsLoading(true);
                setPage(num);
              }
            }
            rowsPerPage={rows}
            labelRowsPerPage={'Elements per Page:'}
            rowsPerPageOptions={[12, 24, 48, 96, 100]}
            onRowsPerPageChange={(event) => {
              let newRows = Number(event.target.value);
              setIsLoading(true);
              if (rows > newRows) {
                setPage(0);
              } else if (newRows * page > total) {
                if (newRows >= 100) {
                  setPage(0);
                } else {
                  setPage(Math.floor(total / newRows));
                }
              }
              setRows(newRows);
            }}
        />
      </div>
  )
}



