
import  { memo } from 'react'
// import { getRandomInt } from '../utils'
const TableExcelComponents = memo(function TableExcelComponents ({ dataSource, idTable, isVisible } : {column?:  any, dataSource?: any[], idTable?: string, isVisible?: boolean}) {
  const columns = (dataSource && dataSource.length > 0) ? Object.keys(dataSource[0]) : []
  return (
    <div style={{ display: isVisible ? 'block' : 'none' }}>
      {(dataSource !== undefined && dataSource.length > 0) && (
        <table className='table table-hover table-striped table-borderless' id={idTable}>
          <thead>
            <tr>
              {columns.map((r: any, indexColumn: number) => (
                <th scope='col' key={indexColumn + 1} style={{ backgroundColor: '#386641', color: '#fff', textAlign: r.align ?? 'center' }}>{r}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataSource.map((fila: any, indexFila:number) => (
              <tr key={indexFila+12}>
                {columns.map((columna: any) => (
                  <td key={columna} style={{ textAlign: 'center' }}>
                    {fila[columna.id] !== undefined && fila[columna.id] !== null ? fila[columna.id] : ''}
                  </td>
                ))}
              </tr>
            ))}

          </tbody>
        </table>
      )}

    </div>
  )
})

export default TableExcelComponents
