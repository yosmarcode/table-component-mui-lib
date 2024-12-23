export function exportTableToExcel (tableID: any, filename: string) {
  let downloadLink: any = null
  const dataType = 'application/vnd.ms-excel'
  const tableSelect: any = document.getElementById(tableID)
  const tableHTML = tableSelect.outerHTML.replace(/ /g, '%20')

  // Specify file name
  filename = filename ? filename + '.xls' : 'excel_data.xls'

  // Create download link element
  downloadLink = document.createElement('a')

  document.body.appendChild(downloadLink)
  const nav = window.navigator as any
  if (nav.msSaveOrOpenBlob) {
    const blob = new Blob(['ufeff', tableHTML], {
      type: dataType
    })
    nav.msSaveOrOpenBlob(blob, filename)
  } else {
    // Create a link to the file
    downloadLink.href = 'data:' + dataType + ', ' + tableHTML

    // Setting the file name
    downloadLink.download = filename

    // triggering the function
    downloadLink.click()
  }
}

const remplaceCaracteresRaro = (cadena: string) => {
  // const specialChars = '!@#$^&%*()+=-[]/{}|:<>?,.'

  cadena = cadena.replace(/á/gi, 'A')
  cadena = cadena.replace(/Á/gi, 'A')
  cadena = cadena.replace(/é/gi, 'E')
  cadena = cadena.replace(/É/gi, 'E')
  cadena = cadena.replace(/í/gi, 'I')
  cadena = cadena.replace(/Í/gi, 'I')
  cadena = cadena.replace(/ó/gi, 'O')
  cadena = cadena.replace(/Ó/gi, 'O')
  cadena = cadena.replace(/ú/gi, 'U')
  cadena = cadena.replace(/Ú/gi, 'U')
  cadena = cadena.replace(/ñ/gi, 'N')
  cadena = cadena.replace(/Ñ/gi, 'N')
  cadena = cadena.replace(/N°/gi, 'N')
  cadena = cadena.replace(/2°/gi, '2')
  cadena = cadena.replace(/°/gi, '')
  cadena = cadena.replace(/#/gi, '')
  return cadena
}

export function exportTableToExcel2 (tableID: string, filename: string) {
  let downloadLink: any = null
  const dataType = 'application/vnd.ms-excel'
  const tableSelect: any = document.getElementById(tableID)
  const tableHTML = remplaceCaracteresRaro(
    tableSelect.outerHTML.replace(/ /g, '%20')
  )
  // Specify file name
  filename = filename ? filename + '.xls' : 'excel_data.xls'

  // Create download link element
  downloadLink = document.createElement('a')

  document.body.appendChild(downloadLink)
  const nav = window.navigator as any
  if (nav.msSaveOrOpenBlob) {
    const blob = new Blob(['\ufeff', tableHTML], {
      type: dataType
    })
    nav.msSaveOrOpenBlob(blob, filename)
  } else {
    // Create a link to the file
    downloadLink.href = 'data:' + dataType + ', ' + tableHTML

    // Setting the file name
    downloadLink.download = filename

    // triggering the function
    downloadLink.click()
  }
}
