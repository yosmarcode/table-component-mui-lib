export interface HeadCell {
    disablePadding?: boolean;
    id?: keyof any;
    label?: string;
    numeric?: boolean;
    sort?: boolean;
    width?: number;
  }

export interface ITableComponent  {
    dataSource: any[], // El codigo se necesita pasar siempre un ID, para porder organizar la columna
    dataSourceExcel?: any[], // Este codigo es necesario para exportar a excel
    columns: HeadCell[],
    isCheckbox?: boolean | undefined,
    isRadioBox?: boolean | undefined,
    isPaginate?: boolean | undefined,
    isDowmload?: boolean | undefined,
    search?: boolean | undefined
    childreButton?: React.ReactNode | any, // Muestra Component boton
    selectedData?: any, // data selected de salida al component de import
    setSelectedData?: any,
    initialSelectionNumber?: number | undefined, // numero inicial de la lista de columna
    _styleColumn?: React.CSSProperties // se le asigna style a la columna
    titlePlaceholder?: string | undefined // title del input de busquedad personalizado
  
  }

  export interface ITextSearch {
    handleSearch?: React.ReactEventHandler | any,
    searchText?: string,
    setSearchText?: React.ReactEventHandler | any,
    placeholder?: string
}

export interface IPaginations {
  dataSource?: any,
  rowsPerPage?:  any,
  setRowsPerPage?: (value: number) => void,
  page?: any,
  setPage?: (value: number) => void,
  handleChangePage?: any,
  handleChangeRowsPerPage?: (event: React.ChangeEvent<HTMLInputElement>) => void
}