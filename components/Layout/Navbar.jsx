// import { PrismicLink } from '@prismicio/react'
// import Link from 'next/link'
import Headroom from 'react-headroom'
import Image from "next/image";
import * as React from "react";
// import PrismicButtonLink from '../PrismicButtonLink'
// import { components } from '../../slices'
// import { SliceZone } from '@prismicio/react'

export const Navbar = () => {
    return (
        <header className={`bg-white`}>
            <Image className={``}
                   src="/epg-header-logo.svg"
                   alt="EPG Logo"
                   width={225}
                   height={100}/>
            <Headroom>
                <h1>HEADROOM</h1>
            </Headroom>
        </header>
    )
}
