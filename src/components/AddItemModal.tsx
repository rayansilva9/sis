import * as React from 'react';
import Button from '@mui/material/Button';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Backdrop, CircularProgress, Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { db } from '@/database/firebase';

type props = {
  isOpen: boolean
  setIsOpen: () => void
  fetchData: () => void
  // setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const AddItemModal: React.FC<props> = ({ isOpen, setIsOpen, fetchData }) => {

  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


  const NomeInpRef = React.useRef<TextFieldProps | null>(null)
  const QuantityInpRef = React.useRef<TextFieldProps | null>(null)
  const PriceInpRef = React.useRef<TextFieldProps | null>(null)

  const [nome, setNome] = React.useState<string>()
  const [quantity, setQuantity] = React.useState<string>()
  const [price, setPrice] = React.useState<string>()

  const [loading, setLoading] = React.useState(false)

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
              quantity: quantity,
            })
            .then(() => {
              alert('Adicionado com sucesso')
            })
        })
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
      {loading && (
        <Backdrop
          sx={{ color: '#fff', zIndex: '999', }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <div>
        <Backdrop
          sx={{ color: '#fff', zIndex: '995', }}
          open={isOpen}
          onClick={() => { setIsOpen() }}
        >
          <div onClick={() => { }} className='relative z-[996] w-[90%] h-[400px] rounded-xl bg-white shadow-2xl '>

          </div>
        </Backdrop>
      </div>
    </>
  );
}

export default React.memo(AddItemModal);