import * as React from 'react'
import Button from '@mui/material/Button'
import TextField, { TextFieldProps } from '@mui/material/TextField'

import { Backdrop, CircularProgress, Slide } from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import { db } from '@/database/firebase'
import { ThemeContext } from '@/context/themeContext'


type props = {
  isOpen: boolean
  FuncIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  ItemName: string
  ItemPrice: number
  ItemQuantity: number
  ItemId: string | number
  fetchData: () => void
  ItemDocId: string
}

const ModalAdditem: React.FC<props> = ({ isOpen, FuncIsOpen, fetchData, ItemDocId, ItemId, ItemName, ItemPrice, ItemQuantity }) => {
  // const Transition = React.forwardRef(function Transition(
  //   props: TransitionProps & {
  //     children: React.ReactElement<any, any>
  //   },
  //   ref: React.Ref<unknown>
  // ) {
  //   return <Slide direction="up" ref={ref} {...props} />
  // })

  const NomeInpRef = React.useRef<TextFieldProps | null>(null)
  const QuantityInpRef = React.useRef<TextFieldProps | null>(null)
  const PriceInpRef = React.useRef<TextFieldProps | null>(null)

  const [nome, setNome] = React.useState<string>()
  const [quantity, setQuantity] = React.useState<string>()
  const [price, setPrice] = React.useState<string>()

  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    NomeInpRef.current!.value = ItemName
    QuantityInpRef.current!.value = ItemQuantity
    PriceInpRef.current!.value = ItemPrice
  }, [ItemDocId, ItemId, ItemName, ItemPrice, ItemQuantity]);

  console.log({ ItemDocId: ItemDocId, ItemId: ItemId, ItemName: ItemName, ItemPrice: ItemPrice, ItemQuantity: ItemQuantity, })

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
      QuantityInpRef.current!.value = ''
      setLoading(false)
    }
  }

  const { theme } = React.useContext(ThemeContext)


  return (
    <>
      {loading && (
        <Backdrop
          onClick={() => {
            setLoading(false)
          }}
          sx={{ color: '#fff', zIndex: '999' }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <div>
        <Backdrop
          sx={{ color: theme == 'light' ? '#fff' : '#000', zIndex: '995' }}
          open={isOpen}>
          <div className="relative z-[996] w-[90%] h-[400px]  px-3 py-8 gap-3 rounded-xl shadow-2xl "
            style={{ background: theme == 'light' ? '#fff' : '#ececec', }}
          >
            <form onSubmit={addNewProduct} className="flex flex-col">
              <p className=" text-2xl mb-4"
                style={{ color: theme == 'light' ? '#000' : '#000' }}
              >Editar Item</p>
              <div className="flex flex-col gap-3">
                <TextField
                  autoFocus={true}
                  defaultValue={ItemName}
                  label=""
                  fullWidth
                  inputRef={NomeInpRef}
                  onChange={({ target }) => setNome(target.value)}
                />
                <TextField
                  defaultValue={ItemQuantity}
                  label="Quantidade"
                  fullWidth
                  inputRef={QuantityInpRef}
                  onChange={({ target }) => setQuantity(target.value)}
                />
                <TextField
                  defaultValue={ItemPrice}
                  label="Preço"
                  fullWidth
                  inputRef={PriceInpRef}
                  onChange={({ target }) => setPrice(target.value)}
                />
              </div>
              <div className="flex gap-3 justify-end mt-8">
                <Button
                  disabled={loading ? true : false}
                  onClick={() => {
                    FuncIsOpen(false), fetchData()
                  }}
                  variant="outlined"
                  color="error"
                >
                  cancelar
                </Button>
                <Button type="submit" variant="outlined" color="success">
                  adicionar
                </Button>
              </div>
            </form>
          </div>
        </Backdrop>
      </div>
    </>
  )
}

export default React.memo(ModalAdditem)
