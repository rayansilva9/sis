// @ts-ignore
import { ReactNode } from "react";
import { Roboto } from "next/font/google";
import Sidebar from "./sidebar";
import NavBarMobile from "./navBarMobile";
import Header from "./header";

type props = {
  children: ReactNode
}
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const Layout: React.FC<props> = ({ children }) => {


  return (
    <>
      <main className={roboto.className}>
        <Sidebar />
        <Header />
        <NavBarMobile />
        {children}
      </main>
    </>
  );
}

export default Layout;