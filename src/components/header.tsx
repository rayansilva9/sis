import { TextField, Button } from '@mui/material'
import { useRouter } from 'next/router'
import { memo } from 'react'
import { CiSearch } from 'react-icons/ci'

const Header = () => {
  const pathname = useRouter().pathname

  return (
    <>
      <div
        style={{ width: 'calc(100vw - 400px)', background: '#fff' }}
        className="h-[80px] flex items-center justify-between ml-[270px] px-4 "
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
          <form className="flex items-center">
            <TextField placeholder="Procurar..." size="small" />
            <Button variant="outlined" sx={{ height: '40px', }}>
              <CiSearch style={{ fontSize: '25px', color: 'inherit', strokeWidth: 0 }} />
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}

export default memo(Header)
