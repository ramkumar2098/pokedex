import { Chip } from '@mui/material'

function Type({ type, size = 'medium', style }) {
  let backgroundColor = 'rgb(0 0 0 / 8%)'
  let color = '#fff'

  switch (type) {
    case 'Grass':
      backgroundColor = '#7c5'
      break
    case 'Poison':
      backgroundColor = '#a59'
      break
    case 'Fire':
      backgroundColor = '#f42'
      break
    case 'Flying':
      backgroundColor = '#89f'
      break
    case 'Water':
      backgroundColor = '#39f'
      break
    case 'Bug':
      backgroundColor = '#ab2'
      break
    case 'Normal':
      backgroundColor = '#aa9'
      break
    case 'Electric':
      backgroundColor = '#fc3'
      break
    case 'Ground':
      backgroundColor = '#db5'
      break
    case 'Fairy':
      backgroundColor = '#e9e'
      break
    case 'Fighting':
      backgroundColor = '#e9e'
      break
    case 'Psychic':
      backgroundColor = '#e9e'
      break
    case 'Rock':
      backgroundColor = '#ba6'
      break
    case 'Ghost':
      backgroundColor = '#66b'
      break
    case 'Dragon':
      backgroundColor = '#76e'
      break
    default:
      color = '#000'
  }
  return (
    <Chip
      label={type}
      size={size}
      style={{ color, backgroundColor, ...style }}
    />
  )
}

export default Type
