import { Checkbox, FormControlLabel, Radio, RadioGroup, Stack, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import React, { FC } from 'react'
import { ITableComponent } from './models'
import { EnhancedTableHead, getComparator, Order } from '../utils/tables'
//import TableExcelComponents from '../TableExcel/TableExcelComponents'
import TablePaginationsComponents from './components/TablePaginations/TablePaginationsComponents'
import SearchTable from './components/SearchTable/SearchTable'
import BtnExcel from '../BtnExcel/BtnExcel'
//import TablePaginations from './components/TablePaginations/TablePaginations'


export const TableComponents: FC<ITableComponent> = ({
  dataSource,
  columns,
  isCheckbox,
  isRadioBox,
  search,
  isDowmload,
 // selectedData,
  setSelectedData,
  isPaginate,
  _styleColumn,
  childreButton,
  titlePlaceholder
 }) => {
  const [order, setOrder] = React.useState<Order>('asc')
  const [orderBy, setOrderBy] = React.useState<keyof any>('calories')
  const [selected, setSelected] = React.useState<any>([])
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)
  const [searchText, setSearchText] = React.useState<string>('') /// state para buscar en el input text
  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof any
  ) => {
    event.preventDefault()
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = dataSource?.map((n) => n)
      setSelected(newSelected)
      setSelectedData(newSelected) // set selected para llevar al compoente invocado
      return
    }
    setSelected([])
    setSelectedData([]) // set selected para llevar al compoente invocado
  }

  const handleClickCheckBox = (event: React.ChangeEvent<HTMLInputElement>, row: any) => {
    event.preventDefault()
    const selectedIndex = selected.indexOf(row)
    let newSelected: any = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, row)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      )
    }

    setSelected(newSelected)
    setSelectedData(newSelected)
  }
  const handleClickRadio = (row: any) => {
    if (row) {
      setSelected([row])
      setSelectedData([row])
    }
  }

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    event?.preventDefault()
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const visibleRows = React.useMemo(
    () =>
      [...dataSource]
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage, dataSource]
  )

  const handleSearch = () => {
    if (searchText.length > 2) {
      const dataResult = dataSource?.filter((row: Record<string, any>) =>
        Object.values(row).some(value => value?.toString().toUpperCase().includes(searchText?.toUpperCase())))

      if (dataResult.length > 0) {
        visibleRows.length = 0 // limpia los datos antiguos
        visibleRows.push(...dataResult)
      } else {
        visibleRows.push(...dataSource
          .sort(getComparator(order, orderBy))
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)) // limpia los datos antiguos}
      }
    } else {
      visibleRows.push(...dataSource
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage))
    }
    return visibleRows
  }

  return (
    <div>
        <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between', margin: '30px', paddingTop: '10px' }}>
          <div>
            {search && (<SearchTable handleSearch={handleSearch} setSearchText={setSearchText} searchText={searchText} placeholder={ titlePlaceholder ?? 'Buscar...' } />)}
          </div>
          <div>
            {isDowmload && (<BtnExcel tableId='_excel-download' fileName='archivo-descargar' />)}
          </div>
        </Stack>
        <TableContainer sx={{
          my: 2,
          maxHeight: 350
        }}
        >

          <Table
            sx={{
              minWidth: 750,
              borderRadius: '25px',
              '& th, & td': { border: '1px solid #d6d6d6d6' }
            }}
            aria-labelledby='tableTitle'
            size='medium'
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={dataSource.length}
              column={columns}
              isCheckbox={isCheckbox}
              isRadioBox={isRadioBox}
              _styleColumn={_styleColumn}
              childreButton={childreButton}
            />
            <TableBody>
              {dataSource && dataSource.length === 0 &&
                <TableCell sx={{ padding: 1 }} colSpan={columns.length + 1}>
                  <h4>No se encontraron registros</h4>
                </TableCell>}
              {visibleRows && visibleRows?.map((row, index: number) => {
                const isItemSelected = selected.includes(row)
                const labelId = `enhanced-table-checkbox-${index}`

                return (
                  <TableRow
                    hover
                    role='checkbox'
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={index+15454}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    {(isCheckbox || childreButton || isRadioBox) && (
                      <TableCell padding='checkbox'>
                        <Stack direction='row' gap={0} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                          {isCheckbox && (
                            <Checkbox
                              color='primary'
                              checked={isItemSelected}
                              inputProps={{
                                'aria-labelledby': labelId
                              }}
                              onClick={(e: any) => handleClickCheckBox(e,row)}
                            /> 
                          )}
                          {isRadioBox && (
                            <RadioGroup
                              aria-labelledby='demo-controlled-radio-buttons-group'
                              name='controlled-radio-buttons-group'
                            >
                              <FormControlLabel
                                sx={{ ml: 1 }}
                                value={row}
                                control={<Radio
                                  color='success'
                                  checked={isItemSelected}
                                  onClick={() => handleClickRadio( row)}
                                         />}
                                label=''
                              />
                            </RadioGroup>
                          )}
                          {childreButton && <div>{childreButton(row)}</div>}
                        </Stack>
                      </TableCell>)}
                    {columns.length > 0 && columns.map((columna: any) => (
                      <TableCell key={columna} style={{ textAlign: 'center' }}>
                        {row[columna.id]}
                      </TableCell>
                    ))}
                  </TableRow>
                )
              })}

            </TableBody>
          </Table>
        </TableContainer>
        {isPaginate
          ? (
            <TablePaginationsComponents
              dataSource={dataSource}
              rowsPerPage={rowsPerPage}
              setPage={setPage}
              page={page}
              setRowsPerPage={setRowsPerPage}
              handleChangePage={handleChangePage}
              handleChangeRowsPerPage={handleChangeRowsPerPage}
            />
            ) : null}
      {/*dataSource && (<TableExcelComponents  dataSource={dataSource} idTable='_excel-download' isVisible={false} />)*/}

    </div>
  )
}

