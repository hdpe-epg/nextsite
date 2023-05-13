// import { PrismicLink } from '@prismicio/react'
// import Link from 'next/link'
import Headroom from 'react-headroom'
import Image from 'next/image'
import { Fragment } from 'react'
import { Popover } from '@headlessui/react'
import { HiChevronDown } from 'react-icons'
// import { components } from '../../slices'
// import { SliceZone } from '@prismicio/react'
import { HeaderLogo } from '../Logos'
import { HiMenu } from 'react-icons/hi'

export const Navbar = () => {
  return (
    <Headroom>
      <div className="mx-auto grid max-w-screen-xl grid-cols-5 items-center justify-items-center py-6">
        <HeaderLogo className={`col-span-1 h-10 lg:h-12`} />
        <nav className="col-span-3">
          <ul className="hidden gap-x-4 text-xl font-semibold text-brand-primary lg:flex">
            <li>Home</li>
            <li>Pipe</li>
            <li>Products</li>
            <li>Services</li>
            <li>Technical Data</li>
            <li>Contact</li>
          </ul>
        </nav>
        <button className="col-span-1 flex flex-col items-end justify-self-end text-brand-primary">
          <HiMenu className=" h-12 w-12" />
          <span className="sr-only">menu</span>
        </button>
      </div>
      <div className="flex items-center justify-center bg-brand-secondary text-white">
        <nav>
          <ul className="grid grid-flow-col gap-x-8 py-1 uppercase">
            <li>Fusion Training</li>
            <li>Fusion Rentals</li>
            <li>Fusion Equipment</li>
            <li>Fusion Services</li>
          </ul>
        </nav>
      </div>
    </Headroom>
  )
}
