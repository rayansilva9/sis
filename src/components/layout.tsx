import { ReactNode } from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import { Roboto } from "next/font/google";

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
        <Header />
        <Sidebar />
        {children}
      </main>
    </>
  );
}

export default Layout;