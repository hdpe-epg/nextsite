import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Transition } from '@headlessui/react'
import { HiChevronRight, HiX } from 'react-icons/hi'
import { PrismicLink } from '@prismicio/react'
import Footer from './Footer'
import { Navbar } from './Navbar'

const Layout = ({ children, footer, navigation }) => {
  const [open, setOpen] = useState(false)
  const { data } = navigation
  return (
    <div className="relative">
      <a
        href="#main-content"
        className=" btn-warning btn fixed -left-[320px] top-12 z-10 transform opacity-50 focus:translate-x-[380px] focus:opacity-100 "
      >
        Press Enter to Skip to Main Content
      </a>
      <div className={`flex min-h-screen flex-col`}>
        <Navbar {...data} open={open} setOpen={setOpen} />
        {/* BEGIN SIDE DRAWER NAV */}
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                  <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                  >
                    <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                          <button
                            type="button"
                            className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <HiX className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </Transition.Child>
                      <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                        <div className="px-4 sm:px-6">
                          <Dialog.Title className="text-center text-base font-bold leading-6 text-brand-secondary">
                            Engineered Pipe Group
                          </Dialog.Title>
                        </div>
                        <div className="relative mt-6 flex flex-1 flex-col gap-y-4 px-4 sm:px-6">
                          {/* Your content */}
                          {data.slices.map(item => {
                            if (item.variation !== 'menuItemWithDropdown') {
                              return (
                                <PrismicLink
                                  key={item.id}
                                  field={item.primary.linktarget}
                                  className="rounded px-2 font-semibold text-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:ring-offset-2"
                                >
                                  {item.primary.linktext}
                                </PrismicLink>
                              )
                            }
                            return (
                              <Disclosure key={item.id}>
                                {({ open }) => (
                                  <>
                                    <Disclosure.Button
                                      className={`flex items-center rounded px-2 font-semibold text-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:ring-offset-2`}
                                    >
                                      <HiChevronRight
                                        className={`inline h-5 w-5 text-brand-secondary ${
                                          open
                                            ? 'rotate-90 transform transition-transform duration-100'
                                            : ''
                                        }`}
                                      />
                                      {item.primary.linktext}
                                    </Disclosure.Button>

                                    <Transition
                                      enter="transition duration-100 ease-out"
                                      enterFrom="transform scale-95 opacity-0"
                                      enterTo="transform scale-100 opacity-100"
                                      leave="transition duration-75 ease-out"
                                      leaveFrom="transform scale-100 opacity-100"
                                      leaveTo="transform scale-95 opacity-0"
                                    >
                                      <Disclosure.Panel>
                                        <ul className="flex flex-col gap-y-4 pl-8">
                                          {item.items.map((subitem, j) => (
                                            <PrismicLink
                                              key={item.id + j}
                                              field={subitem.linktarget}
                                              className="rounded px-2 focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:ring-offset-2"
                                            >
                                              {subitem.linktext}
                                            </PrismicLink>
                                          ))}
                                        </ul>
                                      </Disclosure.Panel>
                                    </Transition>
                                  </>
                                )}
                              </Disclosure>
                            )
                          })}
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
        <main id="main-content">{children}</main>
        <Footer {...footer} />
      </div>
    </div>
  )
}
export default Layout
