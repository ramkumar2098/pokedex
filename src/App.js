import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  CircularProgress,
} from '@mui/material'
import Type from './components/Type'
import EnhancedTableToolbar from './components/EnhancedTableToolbar'
import EnhancedTableHead from './components/EnhancedTableHead'

function EnhancedTable() {
  const [rows, setRows] = useState([])

  const [count, setCount] = useState(0)

  const [loading, setLoading] = useState(true)

  const getData = ({ column, orderBy, offset, limit, query, types } = {}) => {
    setLoading(true)
    axios
      .get(`https://expressjs-pokedex.herokuapp.com/pokedex`, {
        params: {
          column,
          orderBy,
          offset,
          limit,
          query,
          types: types?.toString(),
        },
      })
      .then(response => {
        console.log(response.data)
        setCount(+response.data.count)
        if (offset && limit) {
          setRows([...rows, ...response.data.data])
          return
        }
        setRows(response.data.data)
      })
      .catch(console.log)
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    getData()
  }, [])

  const [order, setOrder] = useState('asc')
  const [orderBy, setOrderBy] = useState('id')
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc'
    const _order = isAsc ? 'desc' : 'asc'
    setOrder(_order)
    setOrderBy(property)
    setPage(0)
    getData({
      column: property,
      orderBy: _order,
      query,
      types: selectedTypes,
    })
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
    if (rows.length == newPage * rowsPerPage)
      getData({
        column: orderBy,
        orderBy: order,
        offset: rows.length,
        limit: rowsPerPage,
        query,
        types: selectedTypes,
      })
  }

  const handleChangeRowsPerPage = event => {
    const rowsPerPage = parseInt(event.target.value, 10)
    setRowsPerPage(rowsPerPage)
    setPage(0)
    getData({
      column: orderBy,
      orderBy: order,
      limit: rowsPerPage,
      query,
      types: selectedTypes,
    })
  }

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0

  const [dialogId, setDialogId] = useState(0)

  const [query, setQuery] = useState('')

  const handleChange = e => {
    const query = e.target.value
    setQuery(query)
    setPage(0)
    getData({
      column: orderBy,
      orderBy: order,
      limit: rowsPerPage,
      query,
      types: selectedTypes,
    })
  }

  const [selectedTypes, setSelectedTypes] = useState([])

  const handleTypeChange = e => {
    const selectedTypes = e.target.value
    setSelectedTypes(
      typeof selectedTypes == 'string'
        ? selectedTypes.split(',')
        : selectedTypes
    )
    setPage(0)
    getData({
      column: orderBy,
      orderBy: order,
      limit: rowsPerPage,
      query,
      types: selectedTypes,
    })
  }

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Paper
        sx={{
          width: { xs: '100%', md: '90%', lg: '70%' },
          mb: 2,
        }}
      >
        <EnhancedTableToolbar
          {...{ query, handleChange, selectedTypes, handleTypeChange }}
        />
        <TableContainer>
          <Table sx={{ minWidth: 750, position: 'relative' }} size={'medium'}>
            {loading && (
              <CircularProgress
                style={{ position: 'absolute', left: '50%', top: '50%' }}
              />
            )}
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody
              style={{
                height:
                  !rows.length || rows.length >= 5
                    ? 80.6 * rowsPerPage + 'px'
                    : null,
              }}
            >
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(row => (
                  <>
                    <Dialog
                      open={dialogId == row.id}
                      onClose={() => setDialogId(0)}
                    >
                      <DialogTitle>{row.name}</DialogTitle>
                      <DialogContent>
                        <img
                          src={row.img_large}
                          alt="no internet"
                          style={{
                            width: '100%',
                            backgroundColor: '#ebebeb',
                            minHeight: '100px',
                          }}
                        />
                        <DialogContentText>{row.description}</DialogContentText>
                      </DialogContent>
                    </Dialog>
                    <TableRow
                      onClick={e => setDialogId(row.id)}
                      style={{ cursor: 'pointer' }}
                      hover
                    >
                      <TableCell align="right">{row.id}</TableCell>
                      <TableCell align="right">
                        <img src={row.img_small} alt="no internet" />
                      </TableCell>
                      <TableCell align="right">{row.name}</TableCell>
                      <TableCell align="right">
                        {row.types.map(type => (
                          <Type
                            key={type}
                            type={type}
                            style={{ marginLeft: '3px' }}
                          />
                        ))}
                      </TableCell>
                    </TableRow>
                  </>
                ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={count}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  )
}

export default EnhancedTable
