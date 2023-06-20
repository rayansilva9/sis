import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'

import { DataGrid, GridColDef, GridRowId, GridValueGetterParams } from '@mui/x-data-grid'

const Produtos = () => {
  const [select, setSelect] = useState<number | string>(0)

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`
    }
  ]

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: 'Raian', age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 10, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 11, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 12, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 13, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 14, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 15, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 16, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 17, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 18, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 19, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 20, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 21, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 22, lastName: 'Roxie', firstName: 'Harvey', age: 65 }
  ]

  const [find, setFind] = useState<string>('')
  const [alternate, setAlternate] = useState<object[]>([])

  const [rowSelect, setRowSelect] = useState<GridRowId[]>([])

  function FindProduct() {
    if (find == '') {
      setAlternate([])
    }
    const result = rows.filter(
      w =>
        w.firstName.toLowerCase().includes(find.toLowerCase()) ||
        w.lastName.toLowerCase().includes(find.toLowerCase())
    )
    setAlternate(result)
  }

  return (
    <>
      <div
        className="py-2 px-4"
        style={{ width: 'calc(100vw - 250px) ', height: '100vh', marginLeft: '250px' }}
      >
        <div className="w-full flex">
          <div className="w-[100px]">
            <select
              style={{ height: '100%', border: '1px solid #ccccccb1' }}
              value={select}
              onChange={({ target }) => {
                setSelect(target.value)
              }}
            >
              <option value="todos">Todos</option>
              <option value="Bahia">Bahia</option>
              <option value="São Paulo">São Paulo</option>
            </select>
          </div>
          <div
            style={{ border: '1px solid #ccccccb1' }}
            className="flex gap-2 items-center px-4 w-full"
          >
            <CiSearch style={{ fontSize: '20px', color: 'blue', strokeWidth: 1 }} />
            <input
              type="text"
              onChange={({ target }) => {
                setFind(target.value), FindProduct()
              }}
              style={{ padding: '4px 4px', flex: 1, outline: 'none' }}
              placeholder="Procurar produto..."
            />
          </div>
        </div>
        <div style={{ flex: 1, width: '100%' }}>
          <DataGrid
            rows={find != '' ? alternate : rows}
            onRowSelectionModelChange={rowSelectionModel => {
              setRowSelect(rowSelectionModel)
            }}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 }
              }
            }}
            pageSizeOptions={[5, 10, 50]}
            checkboxSelection
          />
        </div>
      </div>
    </>
  )
}

export default Produtos
