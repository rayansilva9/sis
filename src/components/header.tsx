import { TextField,Button } from '@mui/material';
import { useRouter } from 'next/router'
import { memo } from 'react';

const Header = () => {
  const pathname = useRouter().pathname

  return (
    <>
      <div
        style={{ width: 'calc(100vw - 400px)' }}
        className="h-[80px] flex items-center justify-between ml-[250px] px-4 "
      >
        <p className="text-2xl font-semibold">
          {pathname == '/'
            ? 'Dashboard'
            : pathname == '/inventario'
              ? 'Inventário'
              : pathname == '/vendas'
                ? 'Vendas'
                : ''}
        </p>
        <div className="">
          <form className='flex items-center'>
            <TextField placeholder='Procurar...' size='small' sx={{  }} />
            {/* <input
              style={{
                background: '#f0f0f0a8',
                borderRadius: '15px',
                height: '35px',
                width: 'switch (key) {
                  case value:
                    
                    break;
                
                  default:
                    break;
                }
                marginRight: '5px'
              }}
              type="text"
            /> */}
            <Button variant='outlined' sx={{height:'40px',}} >Search</Button>
          </form>
        </div>
      </div>
    </>
  )
}

export default memo(Header)
