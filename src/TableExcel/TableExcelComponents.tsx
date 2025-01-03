
import  { memo } from 'react'
import { getRandomInt } from '../utils'
// import { getRandomInt } from '../utils'
const TableExcelComponents = memo(function TableExcelComponents ({ columns, dataSource, idTable, isVisible } : {columns: any, dataSource?: any[], idTable?: string, isVisible?: boolean}) {
  //const columns = (dataSource && dataSource.length > 0) ? Object.keys(dataSource[0]) : []
  return (
    <div style={{ display: isVisible ? 'block' : 'none' }}>
      {(dataSource !== undefined && dataSource.length > 0) && (
        <table className='table table-hover table-striped table-borderless' id={idTable}>
          <thead>
            <tr>
              {columns.map((r: any) => (
                <th scope='col' key={getRandomInt()} style={{ backgroundColor: '#386641', color: '#fff', textAlign: r.align ?? 'center' }}>{r.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataSource.map((fila: any) => (
              <tr key={getRandomInt()}>
                {columns.map((columna: any) => (
                  <td key={columna} style={{ textAlign: 'center' }}>
                    {(fila[columna.id] !== undefined || fila[columna.id] !== null) ? fila[columna.id] : ''}
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
