
import { styled } from '@mui/system'
import {
  TablePagination,
  tablePaginationClasses as classes
} from '@mui/base/TablePagination'
import { IPaginations } from '../../models'
//import { Config, LIST_ROWS_PER_PAGE } from '@/core/config/Config'
const LIST_ROWS_PER_PAGE: number[] = [5, 10, 20, 50, 100, 200]
import FirstPageRoundedIcon from '@mui/icons-material/FirstPageRounded'
import LastPageRoundedIcon from '@mui/icons-material/LastPageRounded'
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded'



const CustomTablePagination = styled(TablePagination)`
  & .${classes.toolbar} {
    display: flex;
 flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 15px;

  
  }

  & .${classes.selectLabel} {
    margin-top: 1rem!important;
    margin-bottom: 1rem!important;
    
    @media (min-width: 768px) {
     margin-top: 0.5rem!important;
    margin-bottom: 0.5rem!important;
    }
  }

  & .${classes.displayedRows} {
   display: none;  
    margin-top: 1rem!important;
    margin-bottom: 1rem!important;
    @media (min-width: 768px) {
    display: flex;  
    margin-left: auto;
    }
  }

  & .${classes.spacer} {
    display: flex!important;
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
    background-color: ##899064;
    border: 1px solid ##899064;
    color: #000;
    transition: all 120ms ease;

    > svg {
      font-size: 22px;
    }

    &:hover {
      background-color: ##899064;
      border-color: #000;
    }

    &:focus {
      outline: 3px solid ##899064;
      border-color: #000;
    }

    &:disabled {
      opacity: 0.5;

      &:hover {
        border: 1px solid ##899064;
        background-color: transparent;
      }
    }
  }
  `


const TablePaginationsComponents = ({ dataSource, rowsPerPage, page, handleChangePage, handleChangeRowsPerPage }: IPaginations) => {
  return (
    <div style={{ maxWidth: '100%', padding: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <CustomTablePagination
      component="div"
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
            showLastButton: true,
            slots: {
              firstPageIcon: FirstPageRoundedIcon,
              lastPageIcon: LastPageRoundedIcon,
              nextPageIcon: ChevronRightRoundedIcon,
              backPageIcon: ChevronLeftRoundedIcon
            }
          }
        }}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  )
}

export default TablePaginationsComponents
