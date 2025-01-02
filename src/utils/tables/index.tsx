import { Box, Checkbox, TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material'
import { visuallyHidden } from '@mui/utils'
import React from 'react'
import { HeadCell } from '../../Table/models'



function descendingComparator<T> (a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}
export type Order = 'asc' | 'desc';

export function getComparator<Key extends keyof any> (
  order: Order,
  orderBy: Key
) : (a: any, b: any) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

export interface EnhancedTableProps {
    numSelected: number;
    onRequestSort: ( property: keyof any) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: any;
    rowCount: number;
    column: HeadCell[] | any,
    isCheckbox?: boolean | undefined,
    isRadioBox?: boolean | undefined,
    _styleColumn?: React.CSSProperties
    childreButton?: React.ReactNode
  }
/// COMPONENT: React.Component Component HEADER
export function EnhancedTableHead (props: EnhancedTableProps) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, column, isCheckbox, isRadioBox, _styleColumn, childreButton } = props

  const createSortHandler =
      (property: keyof any, sort: boolean | undefined) => () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        sort && onRequestSort(property)
      }

  return (
    <TableHead>
      <TableRow>
        {(isCheckbox || childreButton || isRadioBox) && (
          <TableCell padding='checkbox' sx={{ ..._styleColumn }}>
            {isCheckbox &&
              <Checkbox
              color='primary'
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                'aria-label': 'select all desserts'
              }}
            />
            }

          </TableCell>
        )}
        {column.map((c: any) => (
          <TableCell
            key={c.id}
            align={c.numeric ? 'right' : 'center'}
            padding={c.disablePadding ? 'none' : 'normal'}
            sortDirection={(c?.sort && orderBy === c.id) ? order : false}
            sx={{ ..._styleColumn, fontWeight: 700 }}
          >
            <TableSortLabel
              active={c?.sort && (orderBy === c.id)}
              direction={(c?.sort && orderBy === c.id) ? order : 'asc'}
              hideSortIcon={c?.sort && (orderBy === c.id)}
              onClick={createSortHandler(c.id, c?.sort)}
            >
              {c.label}
              {c?.sort && (orderBy === c.id)
                ? (
                  <Box component='span' sx={c?.sort ? visuallyHidden : null}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                  )
                : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}
