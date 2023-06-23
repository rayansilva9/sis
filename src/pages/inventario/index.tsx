import React, { useMemo, useState, useCallback } from 'react'
import { CiSearch } from 'react-icons/ci'
import { BsPlusLg } from 'react-icons/bs'
import { BsArrowRepeat } from 'react-icons/bs'
import { db } from '@/database/firebase'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { Button } from '@mui/material'
import ModalAdditem from '@/components/ModalAddItem'
import ModalEditItem from '@/components/ModalEditItem'

type product = {
  nome: string
  price: number
  data: string
  id: string | number
  quantity: number
  doc: string
}

const Produtos = () => {
  const [select, setSelect] = useState<number | string>(0)
  const [products, setProducts] = useState<product[]>([])
  const [loading, setLoading] = useState(false)

  const columns: GridColDef[] = [
    { field: 'id', type: 'number', headerName: 'ID', width: 70 },
    { field: 'nome', headerName: 'Nome', width: 330 },
    {
      field: 'price',
      type: 'string',
      headerName: 'Preço',
      width: 130,
      align: 'center',
      headerAlign: 'center',

      valueFormatter: ({ value }) => CalcPreco(value)
    },
    {
      field: 'quantity',
      headerName: 'Quantidade',
      width: 160,
      align: 'center',
      headerAlign: 'center'
    },
    {
      field: 'data',
      headerName: 'Data',
      type: 'string',
      width: 210
    }
  ]

  const getInevntary = async () => {
    setLoading(true)
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
              quantity: doc.data().quantity,
              doc: doc.id
            }
          ])
        })
      })
      .then(() => setLoading(false))
  }

  const i = useCallback(() => {
    getInevntary()
  }, [])

  useMemo(() => {
    i()
  }, [])

  const [isAddItem, setIsAddItem] = useState(false)
  const [isEditItem, setIsEditItem] = useState(false)

  const [ProductGetId, setProductGetId] = useState<product[]>([
    {
      nome: '',
      price: 0,
      data: '',
      id: 0,
      quantity: 0,
      doc: ''
    }
  ])

  const getItemById = (e: number) => {
    const result = products.filter(w => w.id == e)
    setProductGetId(result)
    setIsEditItem(true)
  }

  const [find, setFind] = useState<string>('')
  const [alternate, setAlternate] = useState<object[]>([])

  function FindProduct() {
    if (find == '') {
      setAlternate([])
    }
    const result = products.filter(w => w.nome.toLowerCase().includes(find.toLowerCase()))
    setAlternate(result)
  }

  const CalcPreco = useCallback((preco: Number) => {
    var f2 = preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    return f2
  }, [])

  return (
    <>
      <ModalAdditem fetchData={i} FuncIsOpen={setIsAddItem} isOpen={isAddItem} />
      <ModalEditItem
        fetchData={i}
        ItemPrice={ProductGetId![0].price}
        ItemQuantity={ProductGetId![0].quantity}
        ItemDocId={ProductGetId![0].doc}
        ItemName={ProductGetId![0].nome}
        ItemId={ProductGetId![0].id}
        FuncIsOpen={setIsEditItem}
        isOpen={isEditItem}
      />
      <div
        className="py-2 px-4"
        style={{ width: 'calc(100vw - 400px) ', height: '100vh', marginLeft: '270px' }}
      >
        <div style={{ width: 'calc(100%)' }} className="flex my-2">
          <div className="w-[100px]">
            <select
              style={{ height: '100%', border: '1px solid #ccccccb1', padding: '0 4px' }}
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
            <CiSearch style={{ fontSize: '20px', color: 'blue', strokeWidth: 0 }} />
            <input
              type="text"
              onChange={({ target }) => {
                setFind(target.value), FindProduct()
              }}
              style={{ padding: '4px 4px', flex: 1, outline: 'none', }}
              placeholder="Procurar produto..."
            />
          </div>
          <div className="flex">
            <Button
              onClick={() => setIsAddItem(true)}
              sx={{
                marginLeft: '10px'
              }}
              variant="outlined"
            >
              <BsPlusLg style={{ fontSize: '22px' }} />
            </Button>
            <Button
              onClick={() => i()}
              sx={{
                marginLeft: '10px'
              }}
              variant="outlined"
            >
              <BsArrowRepeat style={{ fontSize: '22px' }} />
            </Button>
          </div>
        </div>
        <div style={{ flex: 1, width: '100%' }}>
          <DataGrid
            onCellClick={e => getItemById(e.id as unknown as number)}
            rows={find != '' ? alternate : products}
            loading={loading}
            columns={columns}
            autoHeight
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 }
              }
            }}
            pageSizeOptions={[5, 10, 50]}
          />
        </div>
      </div>
    </>
  )
}

export default Produtos
