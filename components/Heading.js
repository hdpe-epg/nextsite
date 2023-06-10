import * as React from 'react'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import { asText } from '@prismicio/client'
const Heading = ({ as: Comp = 'h2', size = null, children, className, id }) => {
  return (
    <Comp className={`${className} ${inter.className}`} id={id}>
      {children}
    </Comp>
  )
}
export default Heading
