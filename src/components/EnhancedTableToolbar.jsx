import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { Box } from '@mui/system'
import axios from 'axios'
import Type from './Type'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

function EnhancedTableToolbar({
  query,
  handleChange,
  handleTypeChange,
  selectedTypes,
}) {
  const [types, setTypes] = useState([])

  useEffect(() => {
    axios
      .get(`https://expressjs-pokedex.herokuapp.com/pokedex/types`)
      .then(response => {
        setTypes(response.data.data)
      })
      .catch(console.log)
  }, [])

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
      }}
    >
      <Typography sx={{ flex: '1 1 100%' }} variant="h6" component="div">
        Pokedex
      </Typography>
      <TextField
        label="Filter by name"
        value={query}
        onChange={handleChange}
        variant="outlined"
        size="small"
        fullWidth
      />
      <FormControl style={{ marginLeft: '8px' }} fullWidth>
        <InputLabel style={{ top: '-7px' }}>Filter by types</InputLabel>
        <Select
          multiple
          value={selectedTypes}
          onChange={handleTypeChange}
          input={<OutlinedInput label="Filter by types" />}
          renderValue={selected => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map(value => (
                <Type key={value} type={value} size="small" />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
          size="small"
        >
          {types.map(name => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Toolbar>
  )
}

export default EnhancedTableToolbar
