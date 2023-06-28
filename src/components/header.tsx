import { ThemeContext } from '@/context/themeContext'
import { Button } from '@mui/material'
import { useRouter } from 'next/router'
import { memo, useContext } from 'react'
import { CiSearch } from 'react-icons/ci'

const Header = () => {
  const pathname = useRouter().pathname

  const { theme, changeTheme } = useContext(ThemeContext)


  return (
    <>
      <div
        style={{ background: theme == 'light' ? 'white' : 'black' }}
        className="h-[80px] md:w-[calc(100%-100px)] lg:w-[calc(100%-80px)] flex items-center justify-between md:pl-[130px] lg:pl-[300px] px-2 "
      >
        <p className={`text-2xl font-semibold ${theme == 'light' ? 'text-black' : 'text-white'}`}>
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
            <input style={{ background: theme == 'light' ? 'white' : 'black', color: theme == 'light' ? 'black' : 'white', }} className='hidden md:inline border border-blue-500 rounded-md h-[40px] px-4' placeholder="Procurar..." />
            <Button variant="outlined" sx={{ height: '40px', }}>
              <CiSearch style={{ fontSize: '25px', color: 'inherit', strokeWidth: 0 }} />
            </Button>
          </form>
        </div>
      </div >
    </>
  )
}

export default memo(Header)
