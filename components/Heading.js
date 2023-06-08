import * as React from 'react'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
const Heading = ({ as: Comp = 'h2', size = null, children, className }) => {
  return (
    <Comp
      className={`${className}`}>
      {children}
    </Comp>
  )
}
export default Heading
