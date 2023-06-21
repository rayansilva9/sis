import { db } from '@/database/firebase'
import { Button, TextField, TextFieldProps, } from '@mui/material'
import { Dispatch, SetStateAction, memo, useRef, useState } from 'react'

type props = {
  isOpen: boolean
  FuncIsOpen: Dispatch<SetStateAction<boolean>>
  fetchData: () => void
}

const ModalAdditem = ({ isOpen, FuncIsOpen,fetchData }: props) => {

  const NomeInpRef = useRef<TextFieldProps | null>(null)
  const PriceInpRef = useRef<TextFieldProps | null>(null)

  const [nome, setNome] = useState('')
  const [price, setPrice] = useState<number>()

  const [loading, setLoading] = useState(false)

  const addNewProduct = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    const date = Date.now()

    try {
      await db
        .collection('inventary')
        .get()
        .then(querySnapshot => {
          const size = querySnapshot.size;
          db
            .collection('inventary')
            .add({
              nome,
              price,
              data: new Date(date).toISOString(),
              id: size + 1,
            })
            .then(() => {
              alert('Adicionado com sucesso')
              NomeInpRef.current!.value = ''
              PriceInpRef.current!.value = ''
            })
        })
    } catch (error) {
      alert(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {isOpen && (
        <div className="w-screen h-screen z-[99] fixed top-0 left-0 bg-[#050000a7] flex items-center justify-center">
          <div className="w-[600px] h-[400px] relative z-[100] bg-zinc-100 flex flex-col justify-between px-5 py-24 rounded-lg">
            <form onSubmit={addNewProduct}>
              <p className="top-[-40px] left-[150px] relative text-2xl">
                Adicionar novo produto
              </p>
              <div className="flex flex-col gap-4">
                <TextField
                  ref={NomeInpRef as unknown as any}
                  onChange={({ target }) => setNome(target.value)}
                  id="outlined-basic"
                  size="small"
                  label="Nome"
                  variant="outlined"
                />
                <TextField
                  ref={PriceInpRef as unknown as any}
                  onChange={({ target }) => setPrice(parseInt(target.value))}
                  type="number"
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
                    fetchData(),
                    FuncIsOpen(false)
                  }}
                  color="error"
                >
                  Cancelar
                </Button>
                <Button color="success" type="submit">
                  Adicionar
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default memo(ModalAdditem)
