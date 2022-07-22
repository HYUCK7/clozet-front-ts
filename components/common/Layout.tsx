import React, { ReactNode } from 'react'
import Footer from './Footer'
import  Nav  from './Nav'

type LayoutProps = {
    children: ReactNode
}

const Layout = ({children}: LayoutProps) => {
  return (
    <div>
        <Nav/>
        <main>
            {children}
        </main>
    </div>
  )
}

export default Layout