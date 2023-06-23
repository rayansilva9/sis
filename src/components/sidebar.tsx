import { FiGrid } from 'react-icons/fi'
import { FiDollarSign } from 'react-icons/fi'
import { FiSettings } from 'react-icons/fi'
import { FiArchive } from 'react-icons/fi'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState, memo } from 'react'

const Sidebar: React.FC = () => {
  const pathname = useRouter().pathname

  const dashboardRef = useRef<HTMLLIElement>(null)
  const productRef = useRef<HTMLLIElement>(null)
  const salesRef = useRef<HTMLLIElement>(null)
  const settingsRef = useRef<HTMLLIElement>(null)

  const [positionBar, setPositionBar] = useState(0)

  function updateBar() {
    if (pathname == '/') {
      setPositionBar(dashboardRef.current!.getBoundingClientRect().top)
    }
    if (pathname == '/inventario') {
      setPositionBar(productRef.current!.getBoundingClientRect().top)
    }
    if (pathname == '/vendas') {
      setPositionBar(salesRef.current!.getBoundingClientRect().top)
    }
    if (pathname == '/configurar') {
      setPositionBar(settingsRef.current!.getBoundingClientRect().top)
    }
  }

  useEffect(() => {
    updateBar()
  }, [pathname])

  return (
    <>
      <div className="fixed left-0 top-0 h-screen w-[250px] flex flex-col items-center pb-12 pt-[120px] bg-blue-700">
        <div
          className='bar-side'
          style={{
            marginLeft: '10%',
            width: '90%',
            height: '40px',
            background: 'white',
            position: 'absolute',
            left: '0',
            top: positionBar - 5,
            borderTopLeftRadius: '50px',
            borderBottomLeftRadius: '50px',
            transition: 'top .2s linear'
          }}
        ></div>
        <div className="relative w-full">
          <ul className="w-full  flex flex-col gap-6">
            <li
              ref={dashboardRef}
            >
              <Link className="relative w-full pl-12 flex items-center gap-4 "
                href="/">
                <FiGrid
                  style={{
                    fontSize: '22px',
                    color: pathname == '/' ? 'blue' : '#fff',
                    transition: 'color .35s ease'
                  }}
                />
                <p
                  style={{
                    color: pathname == '/' ? 'blue' : '#fff', transition: 'color .35s ease'
                  }}
                  className="font-normal text-lg"
                >
                  Dashboard
                </p>
              </Link>
            </li>
            <li
              ref={productRef}

            >
              <Link className="relative w-full pl-12 flex items-center gap-4 " href="/inventario">
                <FiArchive
                  style={{
                    fontSize: '21px',
                    color: pathname == '/inventario' ? 'blue' : '#fff', transition: 'color .35s ease'

                  }}
                />
                <p
                  style={{
                    color: pathname == '/inventario' ? 'blue' : '#fff', transition: 'color .35s ease'
                  }}
                  className="text-lg"
                >
                  Inventário
                </p>
              </Link>
            </li>
            <li
              ref={salesRef}
            >
              <Link className="relative w-full pl-12 flex items-center gap-4 " href="/vendas">
                <FiDollarSign
                  style={{
                    fontSize: '22px',
                    color: pathname == '/vendas' ? 'blue' : '#fff', transition: 'color .35s ease'

                  }}
                />
                <p
                  style={{
                    color: pathname == '/vendas' ? 'blue' : '#fff', transition: 'color .35s ease'
                  }}
                  className="text-lg"
                >
                  Vendas
                </p>
              </Link>
            </li>
            <li
              ref={settingsRef}
            >
              <Link className="relative w-full pl-12 flex items-center gap-4 "
                href="/configurar">
                <FiSettings
                  style={{
                    fontSize: '22px',
                    color: pathname == '/configurar' ? 'blue' : '#fff', transition: 'color .35s ease'

                  }}
                />
                <p
                  style={{
                    color: pathname == '/configurar' ? 'blue' : '#fff', transition: 'color .35s ease'
                  }}
                  className="text-lg"
                >
                  Configurações
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default memo(Sidebar)
