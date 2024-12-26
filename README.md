# Table Mui Component Librería

Tabla Componente basada de Material UI.

- Autor: Yosmar Hinestroza
- Pafina oficial: [yosmarhinestroza.dev](https://yosmarhinestroza.dev)

Documentación de Material Table

- [Material UI](https://mui.com/material-ui/react-table/)

## Documentación

```js
npm i table-component-mui-lib
```

Implementación en tu proyecto

Tipo de Datos Columnas


```js
export interface HeadCell {
    disablePadding?: boolean;
    id?: keyof any;
    label?: string;
    numeric?: boolean;
    sort?: boolean;
    width?: number;
  }
```

Creación de Columna personalizadas
```js
const column: HeadCell[] = [
  {
    id: 'id',
    numeric: false,
    disablePadding: false,
    label: 'ID',
    sort: true
  },
  {
    id: 'name',
    numeric: false,
    disablePadding: false,
    label: 'Name',
    sort: true
  },
  {
    id: 'username',
    numeric: false,
    disablePadding: false,
    label: 'User Name',
    sort: true
  },
  {
    id: 'email',
    numeric: false,
    disablePadding: false,
    label: 'Correo Eléctronico',
    sort: true
  },

]
```


```js
import { TableComponents, HeadCell } from 'table-component-mui-lib'

     <TableComponents
            dataSource={dataSource ?? []}
            dataSourceExcel={dataTableFields.data ?? []}
            columns={columns ?? []}
            isCheckbox={false}
            isRadioBox={false}
            selectedData={data seleccionada de las columnas}
            setSelectedData={hooks de selección de datos}
            isPaginate
            search
            isDowmload
            initialSelectionNumber={5}
            _styleColumn={{ backgroundColor: `#cdcd`, color: '#000' }}
            childreButton={(row: any) => (
              <Box sx={{ display: 'flex', gap: 1, alignContent: 'center' }}>
                <RadioGroup
                  aria-labelledby='demo-controlled-radio-buttons-group'
                  name='controlled-radio-buttons-group'
                >
                  <FormControlLabel
                    sx={{ ml: 1 }}
                    control={<Radio
                      color='success'
                      checked={boolean}
                      onClick={() => { }}
                             />}
                    onClick={(e: React.ChangeEvent<HTMLInputElement> | any) => {  }} // Guarda los datos de la fila seleccionada}
                    label=''
                  />
                </RadioGroup>
                <IconButton size='medium' sx={{ mr: 1 }}>
                  <Edit
                    style={{ color: #000 }} onClick={() => { }}
                  />
                </IconButton>

              </Box>
            )}
          />

```

Tabla Referencia

| Tipo            | Descripcion                                                                    |
|-----------------|--------------------------------------------------------------------------------|
| dataSource      | Datos visibles en la tabla                                                     |
| dataSourceExcel | Datos Visible para generar Archivo Excel                                       |
| columns         | Columna visible en la tabla                                                    |
| isCheckbox      | Se habilita CheckBox para multiple selección en columnas                       |
| isRadioBox      | Se habilita RadioBox para solo seleccionar un elemento de la columna           |
| selectedData    | Hooks Data Seleccionada (esto permite usar la data en el componente principal) |
| setSelectedData | Hooks Data para seleccionar data                                               |
| isPaginate      | true - false para generar una paginación de la tabla                           |
| search          | Se habilita un textBox para buscar dentro de la tabla                          |
| isDowmload      | Permite habilitar button para descargar archivo excel                          |
| _styleColumn    | Estilo personalizable a las columnas de la tabla                               |
| childreButton   | Botones personalizable en la tabla                                             |