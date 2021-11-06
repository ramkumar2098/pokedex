import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material'

const headCells = [
  { id: 'id', numeric: true, disablePadding: false, label: 'ID' },
  { id: 'sprite', numeric: true, disablePadding: false, label: 'Sprite' },
  { id: 'name', numeric: true, disablePadding: false, label: 'Name' },
  { id: 'types', numeric: true, disablePadding: false, label: 'Types' },
]

function EnhancedTableHead({ order, orderBy, onRequestSort }) {
  const createSortHandler = property => event => {
    onRequestSort(event, property)
  }
  return (
    <TableHead>
      <TableRow>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
              disabled={headCell.id == 'sprite' || headCell.id == 'types'}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

export default EnhancedTableHead
