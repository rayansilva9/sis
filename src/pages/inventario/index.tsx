import React, { useMemo, useState, useCallback, useContext, useEffect } from 'react'
import { CiSearch } from 'react-icons/ci'
import { BsPlusLg } from 'react-icons/bs'
import { BsArrowRepeat } from 'react-icons/bs'
import { db } from '@/database/firebase'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { Button } from '@mui/material'
import { ThemeContext } from '@/context/themeContext'
import AddItemModal from '@/components/AddItemModal'

type product = {
  nome: string
  price: number
  data: string
  id: string | number
  quantity: number
  doc: string
}

const Produtos = () => {
  const { theme } = useContext(ThemeContext)

  if (typeof window !== "undefined") {
    const ToolBarGrid = window.document.querySelector(
      '.MuiToolbar-root'
    )! as HTMLElement
    ToolBarGrid
      ? (ToolBarGrid.style.color = theme == 'light' ? 'black' : 'white')
      : null

    const ToolBarGridIconPaginatio = window.document.querySelector(
      '[data-testid="ArrowDropDownIcon"]'
    )! as HTMLElement
    ToolBarGridIconPaginatio
      ? (ToolBarGridIconPaginatio.style.color = theme == 'light' ? 'black' : '#ccc')
      : null

    const ToolBarGridIconHeader = window.document.querySelectorAll(
      '[data-testid="TripleDotsVerticalIcon"]'
    )! as unknown as HTMLElement[]

    for (let index = 0; index < ToolBarGridIconHeader.length; index++) {
      ToolBarGridIconHeader[index].style.color = theme == 'light' ? 'black' : '#ccc'
    }
  }

  // useEffect(() => {
  //   if (theme) {

  //   }
  // }, [])

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
      valueFormatter: ({ value }) => `R$ ${formatarMoeda(value)}`
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

  const addItem = useCallback(() => {
    setIsAddItem(prev => !prev)
  }, [])

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

  function formatarMoeda(valor: number | string) {
    valor = valor + ''
    valor = parseInt(valor.replace(/[\D]+/g, ''))
    valor = valor + ''
    valor = valor.replace(/([0-9]{2})$/g, ',$1')

    if (valor.length > 6) {
      valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2')
    }

    return valor
  }



  return (
    <>
      {/* <ModalAdditem fetchData={i} FuncIsOpen={setIsAddItem} isOpen={isAddItem} />
      <ModalEditItem
        fetchData={i}
        ItemPrice={ProductGetId![0].price}
        ItemQuantity={ProductGetId![0].quantity}
        ItemDocId={ProductGetId![0].doc}
        ItemName={ProductGetId![0].nome}
        ItemId={ProductGetId![0].id}
        FuncIsOpen={setIsEditItem}
        isOpen={isEditItem}
      /> */}
      <AddItemModal isOpen={isAddItem} setIsOpen={addItem} fetchData={i as () => void} />
      <div className="py-2 px-2 w-full md:w-[calc(100%-100px)] lg:w-[calc(100%-80px)] md:pl-[130px] lg:pl-[300px]">
        <div className="flex my-2">
          <div className="hidden w-[100px]">
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
              style={{
                padding: '4px 4px',
                flex: 1,
                outline: 'none',
                background: theme == 'light' ? 'white' : 'black'
              }}
              placeholder="Procurar produto..."
            />
          </div>
          <div className="flex">
            <Button
              onClick={() => setIsAddItem(true)}
              sx={{
                marginLeft: { xs: '5px' }
              }}
              variant="outlined"
            >
              <BsPlusLg style={{ fontSize: '22px' }} />
            </Button>
            <Button
              onClick={() => i()}
              sx={{
                marginLeft: { xs: '5px' }
              }}
              variant="outlined"
            >
              <BsArrowRepeat style={{ fontSize: '22px' }} />
            </Button>
          </div>
        </div>
        <div style={{ flex: 1, width: '100%' }}>
          <DataGrid
            sx={{
              transition: 'color 0.3s linear',
              color: theme == 'light' ? 'black !important' : 'white !important',
              border: theme == 'light' ? '1px solid #ccccccaa' : '1px solid #ccccccaa'
            }}
            onCellClick={e => getItemById(e.id as unknown as number)}
            rows={find != '' ? alternate : products}
            loading={loading}
            columns={columns}
            autoHeight
            className="gridClass"
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
