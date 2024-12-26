import * as React from 'react'
import { styled } from '@mui/system'
import {
  TablePagination,
  tablePaginationClasses as classes
} from '@mui/base/TablePagination'
//import { Config, LIST_ROWS_PER_PAGE } from '@/core/config/Config'
const LIST_ROWS_PER_PAGE: number[] = [5, 10, 20, 50, 100, 200]
const CustomTablePagination = styled(TablePagination)`

  & .${classes.toolbar} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }

  & .${classes.selectLabel} {
    margin: 0;
  }

  & .${classes.displayedRows} {
    margin: 0;
    @media (min-width: 768px) {
      margin-left: auto;
    }
  }

  & .${classes.spacer} {
    display: none;
  }

  & .${classes.actions} {
    display: flex;
    gap: 0.9rem;
  }
     & .${classes.actions} > button {
    display: flex;
    align-items: center;
    padding: 0.3rem;
    border-radius: 4px;
    background-color: #386641
    border: 1px solid #386641;
    color: #fff;
    transition: all 120ms ease;

    > svg {
      font-size: 22px;
    }

    &:hover {
      background-color: #899064;
      border-color: #000;
    }

    &:focus {
      outline: 3px solid #899064;
      border-color: #000;
    }

    &:disabled {
      opacity: 0.3;

      &:hover {
        border: 1px solid #899064;
        background-color: transparent;
      }
    }
  }
  `
  interface IProps {
    dataSource?: any,
    rowsPerPage?:  any,
    setRowsPerPage?: (value: number) => void,
    page?: any,
    setPage?: (value: number) => void,
    handleChangePage?: any,
    handleChangeRowsPerPage?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TablePaginationsComponents = ({ dataSource, rowsPerPage, page, handleChangePage, handleChangeRowsPerPage }: IProps) => {
  return (
    <div style={{ maxWidth: '100%', padding: '25px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <CustomTablePagination
        rowsPerPageOptions={LIST_ROWS_PER_PAGE}
        colSpan={10}
        count={dataSource.length}
        rowsPerPage={rowsPerPage}
        page={page}
        labelRowsPerPage='Página'
        slotProps={{
          select: {
            'aria-label': 'rows per page'
          },
          actions: {
            showFirstButton: true,
            showLastButton: true
          }
        }}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  )
}

export default TablePaginationsComponents
