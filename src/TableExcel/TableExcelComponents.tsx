
import  { memo } from 'react'
import { HeadCell } from '../Table/models'
import { getRandomInt } from '../utils'
const TableExcelComponents = memo(function TableExcelComponents ({ column, dataSource, idTable, isVisible } : {column?: HeadCell[] | any, dataSource?: any[], idTable?: string, isVisible?: boolean}) {
  const columns = column ? column : (dataSource && dataSource.length > 0) ? Object.keys(dataSource[0]) : []
  return (
    <div style={{ display: isVisible ? 'block' : 'none' }}>
      {(dataSource !== undefined && dataSource.length > 0) && (
        <table className='table table-hover table-striped table-borderless' id={idTable}>
          <thead>
            <tr>
              {columns.map((r: any) => (
                <th scope='col' key={getRandomInt()} style={{ backgroundColor: '#386641', color: '#fff', textAlign: r.align ?? 'center' }}>{r}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataSource.map((fila: any) => (
              <tr key={getRandomInt()}>
                {columns.map((columna: any) => (
                  <td key={columna} style={{ textAlign: 'center' }}>
                    {fila[columna]}
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
