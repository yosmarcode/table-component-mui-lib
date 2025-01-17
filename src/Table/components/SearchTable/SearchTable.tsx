import { BiSearchAlt2 } from "react-icons/bi"; 

import { Box, InputAdornment, TextField } from '@mui/material'
import React from 'react'
import { ITextSearch } from '../../models'

const SearchTable = ({ handleSearch, setSearchText, placeholder }: ITextSearch) => {
  return (
    <div>
      <Box>
        <TextField
          placeholder={placeholder ?? ''}
          variant='outlined'
          size='small'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value)}
          onKeyUp={(e: any) => e.target.value.length > 0 && handleSearch(e.target.value)}
          onBlur={(e: any) => handleSearch(e.target.value)}
          sx={{ width: '250px' }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position='start'>
                  <BiSearchAlt2 color='success' />
                </InputAdornment>
              )
            }
          }}
        />
      </Box>
    </div>
  )
}

export default SearchTable
