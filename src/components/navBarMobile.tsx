import React, { useEffect, useRef, useState, useContext } from 'react'
import Link from 'next/link'
import { FiGrid } from 'react-icons/fi'
import { FiDollarSign } from 'react-icons/fi'
import { FiSettings } from 'react-icons/fi'
import { FiArchive } from 'react-icons/fi'
import { TrackNavBarMobile } from './styles/trackNavBarMobile'
import { useRouter } from 'next/router'
import { ThemeContext } from '@/context/themeContext'

const NavBarMobile = () => {
  const pathname = useRouter().pathname

  const dashboardRef = useRef<HTMLLIElement>(null)
  const productRef = useRef<HTMLLIElement>(null)
  const salesRef = useRef<HTMLLIElement>(null)
  const settingsRef = useRef<HTMLLIElement>(null)

  const [positionBar, setPositionBar] = useState(0)

  function updateBar() {
    switch (pathname) {
      case '/':
        setPositionBar(dashboardRef.current!.getBoundingClientRect().left)

        break
      case '/inventario':
        setPositionBar(productRef.current!.getBoundingClientRect().left)

        break
      case '/vendas':
        setPositionBar(salesRef.current!.getBoundingClientRect().left)

        break
      case '/configurar':
        setPositionBar(settingsRef.current!.getBoundingClientRect().left)

        break

      default:
        break
    }
  }

  useEffect(() => {
    updateBar()
    console.log(positionBar)
  }, [pathname])

  const { theme } = useContext(ThemeContext)

  return (
    <>
      <div className="flex z-50 fixed left-0 bottom-0 w-screen h-[50px] bg-blue-700 md:hidden">
        <TrackNavBarMobile theme={theme} left={positionBar} />
        <ul className="w-full flex gap-3 items-center justify-around">
          <li
            style={{ top: pathname == '/' ? '-20px' : 0, transition: 'top 0.3s linear' }}
            ref={dashboardRef}
            className="z-[91] relative"
          >
            <Link href="/">
              <FiGrid
                style={{ fontSize: '26px', color: theme == 'light' ? 'black' : 'white' }}
              />
            </Link>
          </li>
          <li
            style={{
              top: pathname == '/inventario' ? '-20px' : 0,
              transition: 'top 0.3s linear',
              color: theme == 'light' ? 'black' : 'white'
            }}
            ref={productRef}
            className="z-[91] relative"
          >
            {' '}
            <Link href="/inventario">
              <FiArchive style={{ fontSize: '26px' }} />
            </Link>
          </li>
          <li
            style={{
              top: pathname == '/vendas' ? '-20px' : 0,
              transition: 'top 0.3s linear',
              color: theme == 'light' ? 'black' : 'white'
            }}
            ref={salesRef}
            className="z-[91] relative"
          >
            {' '}
            <Link href="/vendas">
              <FiDollarSign style={{ fontSize: '26px' }} />
            </Link>
          </li>
          <li
            style={{
              top: pathname == '/configurar' ? '-20px' : 0,
              transition: 'top 0.3s linear',
              color: theme == 'light' ? 'black' : 'white'
            }}
            ref={settingsRef}
            className="z-[91] relative"
          >
            {' '}
            <Link href="/configurar">
              <FiSettings style={{ fontSize: '26px' }} />
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default NavBarMobile
