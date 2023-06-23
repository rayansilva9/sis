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
            <Link href="/">
              <li
                ref={dashboardRef}
                className="relative w-full pl-12 flex items-center gap-4 "
              >
                <FiGrid
                  style={{
                    fontSize: '22px',
                    color: pathname == '/' ? 'blue' : '#fff',
                    transition: 'color .2s linear'
                  }}
                />
                <p
                  style={{
                    color: pathname == '/' ? 'blue' : '#fff', transition: 'color .2s linear'
                  }}
                  className="font-normal text-lg"
                >
                  Dashboard
                </p>
              </li>
            </Link>
            <Link href="/inventario">
              <li
                ref={productRef}
                className="relative w-full pl-12 flex items-center gap-4 "
              >
                <FiArchive
                  style={{
                    fontSize: '21px',
                    color: pathname == '/inventario' ? 'blue' : '#fff', transition: 'color .2s linear'

                  }}
                />
                <p
                  style={{
                    color: pathname == '/inventario' ? 'blue' : '#fff', transition: 'color .2s linear'
                  }}
                  className="text-lg"
                >
                  Inventário
                </p>
              </li>
            </Link>
            <Link href="/vendas">
              <li
                ref={salesRef}
                className="relative w-full pl-12 flex items-center gap-4 "
              >
                <FiDollarSign
                  style={{
                    fontSize: '22px',
                    color: pathname == '/vendas' ? 'blue' : '#fff', transition: 'color .2s linear'

                  }}
                />
                <p
                  style={{
                    color: pathname == '/vendas' ? 'blue' : '#fff', transition: 'color .2s linear'
                  }}
                  className="text-lg"
                >
                  Vendas
                </p>
              </li>
            </Link>
            <Link href="/configurar">
              <li
                ref={settingsRef}
                className="relative w-full pl-12 flex items-center gap-4 "
              >
                <FiSettings
                  style={{
                    fontSize: '22px',
                    color: pathname == '/configurar' ? 'blue' : '#fff', transition: 'color .2s linear'

                  }}
                />
                <p
                  style={{
                    color: pathname == '/configurar' ? 'blue' : '#fff', transition: 'color .2s linear'
                  }}
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

export default memo(Sidebar)
