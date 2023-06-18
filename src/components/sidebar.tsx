import { FiGrid } from 'react-icons/fi'
import { FiDollarSign } from 'react-icons/fi'
import { FiSettings } from 'react-icons/fi'
import { FiArchive } from 'react-icons/fi'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Sidebar: React.FC = () => {
  const pathname = useRouter().pathname

  return (
    <>
      <div className="fixed left-0 h-screen w-[250px] flex flex-col items-center py-12 bg-white">
        <div className="relative w-full">
          <ul className="w-full  flex flex-col gap-6">
            <Link href="/">
              <li className="relative w-full pl-12 flex items-center gap-4 ">
                <div
                  style={{
                    display: pathname == '/' ? 'inline' : 'none',
                    width: '5px',
                    height: '40px',
                    background: 'blue',
                    position: 'absolute',
                    left: '0',
                    top: '-5px',
                    borderRadius: '50px'
                  }}
                ></div>

                <FiGrid style={{ fontSize: '22px', color: pathname == '/' ? 'blue' : '#808080' }} />
                <p
                  style={{ color: pathname == '/' ? 'blue' : '#808080' }}
                  className="font-normal text-lg"
                >
                  Dashboard
                </p>
              </li>
            </Link>
            <Link href="/produtos">
              <li className="relative w-full pl-12 flex items-center gap-4 ">
                <div
                  style={{
                    display: pathname == '/produtos' ? 'inline' : 'none',
                    width: '5px',
                    height: '40px',
                    background: 'blue',
                    position: 'absolute',
                    left: '0',
                    top: '-5px',
                    borderRadius: '20px'
                  }}
                ></div>
                <FiArchive style={{ fontSize: '21px', color: pathname == '/produtos' ? 'blue' : '#808080' }} />
                <p
                  style={{ color: pathname == '/produtos' ? 'blue' : '#808080' }}
                  className="text-lg"
                >
                  Produtos
                </p>
              </li>
            </Link>
            <Link href="/vendas">
              <li className="relative w-full pl-12 flex items-center gap-4 ">
                <div
                  style={{
                    display: pathname == '/vendas' ? 'inline' : 'none',
                    width: '5px',
                    height: '40px',
                    background: 'blue',
                    position: 'absolute',
                    left: '0',
                    top: '-5px',
                    borderRadius: '20px'
                  }}
                ></div>
                <FiDollarSign style={{ fontSize: '22px', color: pathname == '/vendas' ? 'blue' : '#808080' }} />
                <p
                  style={{ color: pathname == '/vendas' ? 'blue' : '#808080' }}
                  className="text-lg"
                >
                  Vendas
                </p>
              </li>
            </Link>
            <Link href="/configurar">
              <li className="relative w-full pl-12 flex items-center gap-4 ">
                <div
                  style={{
                    display: pathname == '/configurar' ? 'inline' : 'none',
                    width: '5px',
                    height: '40px',
                    background: 'blue',
                    position: 'absolute',
                    left: '0',
                    top: '-5px',
                    borderRadius: '20px'
                  }}
                ></div>
                <FiSettings style={{ fontSize: '22px', color: pathname == '/configurar' ? 'blue' : '#808080' }} />
                <p
                  style={{ color: pathname == '/configurar' ? 'blue' : '#808080' }}
                  className="text-lg"
                >
                  Configurações
                </p>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Sidebar
