import Footer from './Footer'
import { Navbar } from './Navbar'

const Layout = ({ children, footer, navigation }) => {
  return (
    <div className="relative">
      <a
        href="#main-content"
        className=" btn-warning btn fixed -left-[320px] top-12 z-10 transform opacity-50 focus:translate-x-[380px] focus:opacity-100 "
      >
        Press Enter to Skip to Main Content
      </a>
      <div className={`flex min-h-screen flex-col`}>
        <Navbar {...navigation?.data} />
        <main id="main-content">{children}</main>
        <Footer {...footer} />
      </div>
    </div>
  )
}
export default Layout
