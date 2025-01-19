export interface HeadCell {
  disablePadding?: boolean;
  id?: keyof string | object | any;
  label?: string;
  numeric?: boolean;
  sort?: boolean;
  width?: number;
  isVisible?: boolean;
}

export interface ITableComponent  {
    dataSource: any[], // El codigo se necesita pasar siempre un ID, para porder organizar la columna
    columns: HeadCell[] | any,
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
    limitPagination?: number | undefined // limite de paginacion por pagina
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