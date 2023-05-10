// import { PrismicLink } from '@prismicio/react'
import * as React from 'react'
export const Footer = () => {
  React.useEffect(() => {
    const year = new Date().getFullYear()
    document.querySelector('#copyright-year').innerHTML = year
  }, [])
  return (
    <footer className="footer bg-neutral text-primary mt-auto p-4">
      <div className="self-center justify-self-center md:justify-self-start">
        <p>
          Copyright ©{' '}
          <span id="copyright-year">
            sit tight while we figure out what year it is
          </span>{' '}
          - All right reserved
        </p>
      </div>
    </footer>
  )
}
export default Footer
