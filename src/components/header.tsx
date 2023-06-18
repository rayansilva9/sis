import { useRouter } from 'next/router'

const Header = () => {
  const pathname = useRouter().pathname

  return (
    <>
      <div
        style={{ width: 'calc(100vw - 250px)' }}
        className="h-[80px] flex items-center ml-[250px] px-4 "
      >
        <p className="text-2xl font-semibold mr-[570px]">
          {pathname == '/'
            ? 'Dashboard'
            : pathname == '/produtos'
            ? 'Produtos'
            : pathname == '/vendas'
            ? 'Vendas'
            : ''}
        </p>
        <div className="">
          <form>
            <input
              style={{
                background: '#f0f0f0a8',
                borderRadius: '15px',
                height: '35px',
                width: '300px',
                marginRight: '5px'
              }}
              type="text"
            />
            <button
              className="bg-blue-600"
              style={{ borderRadius: '12px', padding: '5px 10px', color: 'white' }}
              type="submit"
            >
              Buscar
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Header
