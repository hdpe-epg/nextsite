// import { PrismicLink } from '@prismicio/react'
import Link from 'next/link'
import Headroom from 'react-headroom'
// import Image from 'next/image'

import { components } from '@/slices'
import { PrismicLink, SliceZone } from '@prismicio/react'
import { HeaderLogo } from '../Logos'
import { HiMenu } from 'react-icons/hi'

export const Navbar = ({ slices, submenu, open, setOpen }) => {
  const handleclick = () => {
    open ? setOpen(false) : setOpen(true)
  }
  const navItems = slices.filter(item => item.primary.linktext !== 'Contact Us')

  return (
    <Headroom>
      <div className="relative mx-auto flex max-w-screen-2xl items-center justify-between px-4 py-6">
        <Link href="/" title="HDPE EPG Homepage">
          <HeaderLogo className={`h-10 lg:col-span-2 lg:h-12`} />
        </Link>
        {/*top nav*/}
        <nav>
          {/*HIDDEN hides the top nav on mobile, revealing it at large*/}
          <ul className="hidden gap-x-3 2xl:grid 2xl:grid-flow-col">
            <SliceZone slices={navItems} components={components} />
          </ul>
        </nav>
        <div className="flex justify-end lg:min-w-[225px]">
          <button
            className="flex flex-col items-end justify-self-end text-brand-primary 2xl:hidden"
            onClick={handleclick}
          >
            <HiMenu className=" h-12 w-12" />
            <span className="sr-only">menu</span>
          </button>
          <Link
            href="/locations/"
            className="hidden shrink-0 rounded-md border-2 border-brand-secondary px-3 py-2 text-center text-sm transition-transform duration-75 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:ring-offset-1 active:scale-95 2xl:block"
          >
            Contact Us
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center bg-brand-secondary text-white">
        {/*secondary nav*/}
        <nav>
          <ul className="grid grid-flow-col gap-x-8 py-1 uppercase">
            {submenu?.length > 0 &&
              submenu.map((subitem, i) => (
                <li
                  // add a class for small screen small font
                  className="text-center text-xs md:text-sm lg:text-base"
                  key={subitem.linktarget.id + i || subitem.linktarget.url + i}
                >
                  <PrismicLink field={subitem.linktarget}>
                    {subitem.linktext}
                  </PrismicLink>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </Headroom>
  )
}
