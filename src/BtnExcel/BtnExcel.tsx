import React from 'react'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import { exportTableToExcel2 } from '../utils/DownLoaderExcel/DownLoaderExcel'
import { Button } from '@mui/material'




interface IProps {
    tableId: string,
    fileName: string
}

const BtnExcel: React.FC<IProps> = ({ tableId, fileName }: { tableId: string, fileName: string }) => {

  const handleDownload = () => {
    if (tableId === '' || fileName === '') {
      alert('Se debe de configurar lo siguientes parametros (ID TABLE , FILE NAME), si el problema perciste contacte al (ADMINISTRADOR)')
    } else {
      exportTableToExcel2(tableId, fileName)
    }
  }

  return (
    <div>
      <Button
        variant='contained'
        style={{ backgroundColor: '#386641', color: '#fff' }}
        onClick={() => handleDownload()}
      >
        <div className='d-flex justify-content-between'>
          <div>
            <AiOutlineCloudDownload style={{ fontSize: '25px' }} />
            <span className='my-1 m-2'>Descargar Archivo</span>
          </div>

        </div>

      </Button>
    </div>
  )
}

export default BtnExcel
