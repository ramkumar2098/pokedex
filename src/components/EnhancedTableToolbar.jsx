import { TextField, Toolbar, Typography } from '@mui/material'

function EnhancedTableToolbar({ query, handleChange }) {
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
      }}
    >
      <Typography
        sx={{ flex: '1 1 100%' }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
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
    </Toolbar>
  )
}

export default EnhancedTableToolbar
