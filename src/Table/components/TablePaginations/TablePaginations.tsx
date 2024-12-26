import { TablePagination } from '@mui/material'
import React, { FC } from 'react'
import { IPaginations } from '../../models'


const TablePaginations: FC<IPaginations>= ({ dataSource, rowsPerPage, page, handleChangePage, handleChangeRowsPerPage }) => {
const LIST_ROWS_PER_PAGE: number[] = [5, 10, 20, 50, 100, 200]

return (
    <div>
        <TablePagination
          rowsPerPageOptions={LIST_ROWS_PER_PAGE}
          component="div"
          count={dataSource.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
    </div>
  )
}

export default TablePaginations