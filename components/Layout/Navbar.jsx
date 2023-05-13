// import { PrismicLink } from '@prismicio/react'
// import Link from 'next/link'
import Headroom from 'react-headroom'
import Image from 'next/image'

import { components } from '@/slices'
import { PrismicLink, SliceZone } from '@prismicio/react'
import { HeaderLogo } from '../Logos'
import { HiMenu } from 'react-icons/hi'

export const Navbar = ({ slices, submenu }) => {
  return (
    <Headroom>
      <div className="mx-auto grid max-w-screen-xl grid-cols-12 items-center justify-items-center py-6">
        <HeaderLogo className={`col-span-2 h-10 lg:h-12`} />
        <nav className="col-span-9">
          <ul className="grid grid-flow-col gap-x-6">
            <SliceZone slices={slices} components={components} />
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
            {submenu?.length > 0 &&
              submenu.map((subitem, i) => (
                <li
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
