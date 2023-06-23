import { db } from '@/database/firebase'
import { Backdrop, Button, CircularProgress, TextField, TextFieldProps, } from '@mui/material'
import { Dispatch, SetStateAction, memo, useRef, useState } from 'react'

type props = {
  isOpen: boolean
  FuncIsOpen: Dispatch<SetStateAction<boolean>>
  ItemName: string
  ItemPrice: number
  ItemQuantity: number
  ItemId: string | number
  fetchData: () => void
  ItemDocId: string
}

const ModalEditItem = ({ isOpen, FuncIsOpen, ItemName, ItemPrice, ItemQuantity, ItemId, fetchData, ItemDocId }: props) => {

  const NomeInpRef = useRef<TextFieldProps | null>(null)
  const QuantityInpRef = useRef<TextFieldProps | null>(null)
  const PriceInpRef = useRef<TextFieldProps | null>(null)

  const [nome, setNome] = useState('')
  const [quantity, setQuantity] = useState<number>()
  const [price, setPrice] = useState<number>()

  const [loading, setLoading] = useState(false)

  const addNewProduct = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    const date = Date.now()

    try {
      const docRef = db.collection('inventary').doc(ItemDocId);

      await docRef.update({
        nome,
        price,
        data: new Date(date).toISOString(),
        quantity,
      })
        .then(() => {
          FuncIsOpen(false)
          fetchData()
        })
        .catch((error) => {
          console.error('Erro ao atualizar o documento:', error);
        });
    } catch (error) {
      alert(error)
    } finally {
      NomeInpRef.current!.value = ''
      PriceInpRef.current!.value = ''
      setLoading(false)
    }
  }


  return (
    <>
      {isOpen && (
        <>
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
          <div className="w-screen h-screen z-[99] fixed top-0 left-0 bg-[#050000a7] flex items-center justify-center">
            <div className="w-[600px] h-[400px] relative z-[100] bg-zinc-100 flex flex-col justify-between px-5 py-24 rounded-lg">
              <form onSubmit={addNewProduct}>
                <p className="top-[-40px] left-[150px] relative text-2xl">
                  Editar produto
                </p>
                <div className="flex flex-col gap-4">
                  <TextField
                    defaultValue={ItemName}
                    ref={NomeInpRef as unknown as any}
                    onChange={({ target }) => setNome(target.value)}
                    id="outlined-basic"
                    size="small"
                    label="Nome"
                    variant="outlined"
                  />
                  <TextField
                    defaultValue={ItemQuantity}

                    ref={QuantityInpRef as unknown as any}
                    onChange={({ target }) => setQuantity(parseFloat(target.value))}
                    type="text"
                    id="outlined-basic"
                    size="small"
                    label="Quantidade"
                    variant="outlined"
                  />
                  <TextField
                    defaultValue={ItemPrice}
                    ref={PriceInpRef as unknown as any}
                    onChange={({ target }) => setPrice(parseFloat(target.value))}
                    type="text"
                    id="outlined-basic"
                    size="small"
                    label="Preço"
                    variant="outlined"
                  />
                </div>
                <div className="w-full flex justify-center my-5 gap-10">
                  <Button
                    disabled={loading ? true : false}
                    onClick={() => {
                      FuncIsOpen(false)
                    }}
                    color="error"
                  >
                    Cancelar
                  </Button>
                  <Button color="success" type="submit">
                    Confirmar
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default memo(ModalEditItem)
