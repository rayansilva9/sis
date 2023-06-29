import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";

import { FiGrid } from 'react-icons/fi'
import { FiDollarSign } from 'react-icons/fi'
import { FiSettings } from 'react-icons/fi'
import { FiArchive } from 'react-icons/fi'
import { TrackSideBar } from "./styles/trackSidebar";
import { ThemeContext } from "@/context/themeContext";
import ToggleTheme from "./toggleTheme";

const Sidebar = () => {

  const pathname = useRouter().pathname

  const dashboardRef = useRef<HTMLLIElement>(null)
  const productRef = useRef<HTMLLIElement>(null)
  const salesRef = useRef<HTMLLIElement>(null)
  const settingsRef = useRef<HTMLLIElement>(null)

  const [positionBar, setPositionBar] = useState(0)

  function updateBar() {
    switch (pathname) {
      case '/':
        setPositionBar(dashboardRef.current!.getBoundingClientRect().top)

        break
      case '/inventario':
        setPositionBar(productRef.current!.getBoundingClientRect().top)

        break
      case '/vendas':
        setPositionBar(salesRef.current!.getBoundingClientRect().top)

        break
      case '/configurar':
        setPositionBar(settingsRef.current!.getBoundingClientRect().top)

        break

      default:
        break
    }
  }

  useEffect(() => {
    updateBar()
  }, [pathname])

  const { theme } = useContext(ThemeContext)


  return (
    <>
      <div className={`hidden fixed md:h-screen md:w-[100px] lg:w-[250px] md:flex flex-col items-center md:pb-12 md:pt-[120px] ${theme == 'light' ? 'bg-blue-700' : "bg-blue-700"} `}>
        <TrackSideBar theme={theme} top={positionBar} />
        <ToggleTheme />
        <div className="relative w-full">
          <ul className='w-full  flex flex-col gap-6'>
            <li ref={dashboardRef}>
              <Link href='/' className="relative w-full pl-12 flex items-center md:items-left gap-4 ">
                <FiGrid
                  style={{
                    fontSize: '22px',
                    color: pathname == '/' ? 'blue' : '#fff',
                    transition: 'color .35s ease'
                  }}
                />
                <p
                  style={{
                    color: pathname == '/' ? 'blue' : '#fff',
                    transition: 'color .35s ease'
                  }}
                  className="font-normal text-lg hidden lg:inline"
                >
                  Dashboard
                </p>
              </Link>
            </li>
            <li ref={productRef}>
              <Link href='/inventario' className="relative w-full pl-12 flex items-center md:items-left gap-4 ">
                <FiArchive
                  style={{
                    fontSize: '21px',
                    color: pathname == '/inventario' ? 'blue' : '#fff',
                    transition: 'color .35s ease'
                  }}
                />
                <p
                  style={{
                    color: pathname == '/inventario' ? 'blue' : '#fff',
                    transition: 'color .35s ease'
                  }}
                  className="font-normal text-lg hidden lg:inline"
                >
                  Inventário
                </p>
              </Link>
            </li>
            <li ref={salesRef}>
              <Link href='/vendas' className="relative w-full pl-12 flex items-center md:items-left gap-4 ">
                <FiDollarSign
                  style={{
                    fontSize: '22px',
                    color: pathname == '/vendas' ? 'blue' : '#fff',
                    transition: 'color .35s ease'
                  }}
                />
                <p
                  style={{
                    color: pathname == '/vendas' ? 'blue' : '#fff',
                    transition: 'color .35s ease'
                  }}
                  className="font-normal text-lg hidden lg:inline"
                >
                  Vendas
                </p>
              </Link>
            </li>
            <li ref={settingsRef}>
              <Link href='/configurar' className="relative w-full pl-12 flex items-center md:items-left gap-4 ">
                <FiSettings
                  style={{
                    fontSize: '22px',
                    color: pathname == '/configurar' ? 'blue' : '#fff',
                    transition: 'color .35s ease'
                  }}
                />
                <p
                  style={{
                    color: pathname == '/configurar' ? 'blue' : '#fff',
                    transition: 'color .35s ease'
                  }}
                  className="font-normal text-lg hidden lg:inline"
                >
                  Configurações
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div >
    </>
  );
}

export default Sidebar;