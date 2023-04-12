import { InputAdornment, TextField } from '@mui/material';
import Image from 'next/image';
import React from 'react'

function SearchField() {
  return (
    <TextField
    id="input-with-icon-textfield"
    placeholder="Search"
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <Image
            src="images/search.svg"
            width={15}
            height={15}
            alt="search"
          />
        </InputAdornment>
      ),
    }}
    variant="standard"
  />
  )
}

export default SearchField;