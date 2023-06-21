import React, { useMemo, useState, useCallback } from 'react'
import { CiSearch } from 'react-icons/ci'
import { db } from '@/database/firebase'

import { DataGrid, GridColDef, GridRowId, } from '@mui/x-data-grid'
import { Button } from '@mui/material'
import ModalAdditem from '@/components/ModalAddItem'

type product = {
  nome: string,
  price: number,
  data: string,
  id: string
}

const Produtos = () => {
  const [select, setSelect] = useState<number | string>(0)
  const [products, setProducts] = useState<product[]>([])

  const columns: GridColDef[] = [
    { field: 'id', type: 'number', headerName: 'ID', width: 70 },
    { field: 'nome', headerName: 'Nome', width: 130 },
    { field: 'price', type: 'number', headerName: 'Preço', width: 130 },
    {
      field: 'data',
      headerName: 'Data',
      type: 'string',
      width: 210
    },
  ]

  const getInevntary = async () => {
    await db
      .collection('inventary')
      .get()
      .then(q => {
        setProducts([])
        q.forEach(doc => {
          setProducts(prev => [
            ...prev,
            {
              id: doc.data().id,
              nome: doc.data().nome,
              price: doc.data().price,
              data: doc.data().data,
            }
          ])
        })
      })
  }

  const i = useCallback(() => {
    getInevntary()
  }, [])

  useMemo(() => {
    i()
  }, [])

  const [isAddItem, setIsAddItem] = useState(false)

  const [find, setFind] = useState<string>('')
  const [alternate, setAlternate] = useState<object[]>([])

  const [rowSelect, setRowSelect] = useState<GridRowId[]>([])

  function FindProduct() {
    if (find == '') {
      setAlternate([])
    }
    const result = products.filter(
      w =>
        w.nome.toLowerCase().includes(find.toLowerCase())
    )
    setAlternate(result)
  }

  return (
    <>
      <ModalAdditem fetchData={i} FuncIsOpen={setIsAddItem} isOpen={isAddItem} />
      <div
        className="py-2 px-4"
        style={{ width: 'calc(100vw - 200px) ', height: '100vh', marginLeft: '250px' }}
      >
        <div style={{ width: 'calc(100% - 250px)' }} className="flex my-2">
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
          <div>
            <Button
              onClick={() => setIsAddItem(true)}
              sx={{
                marginLeft: '10px'
              }}
              variant="outlined"
            >
              Add
            </Button>
          </div>
        </div>
        <div style={{ flex: 1, width: '100%' }}>
          <DataGrid
            rows={find != '' ? alternate : products}
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
