import { Fragment, useState } from 'react'
import { usePopper } from 'react-popper'
import { Popover, Transition } from '@headlessui/react'
import { HiChevronDown } from 'react-icons/hi'
import { PrismicLink } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.MenuItemSlice} MenuItemSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MenuItemSlice>} MenuItemProps
 * @param {MenuItemProps}
 */
const MenuItem = ({ slice }) => {
  let [referenceElement, setReferenceElement] = useState()
  let [popperElement, setPopperElement] = useState()
  let { styles, attributes } = usePopper(referenceElement, popperElement)
  const {
    primary: { linktext, linktarget },
    items,
  } = slice

  switch (slice.variation) {
    case 'menuItemWithDropdown':
      return (
        <li>
          <Popover className={`relative`}>
            {({ open, close }) => (
              <>
                <Popover.Button
                  ref={setReferenceElement}
                  className={`
                  ${open ? '' : 'text-opacity-90'}
                  group inline-flex items-center rounded-md px-3 py-2 text-xl font-semibold text-brand-primary hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-opacity-75`}
                  onMouseEnter={({ target }) => {
                    open ? '' : target.click()
                  }}
                >
                  <span>{linktext}</span>
                  <HiChevronDown
                    className={`${open ? '' : 'text-opacity-70'}
                   ml-2 h-5 w-5 text-brand-secondary transition duration-150 ease-in-out group-hover:text-opacity-80`}
                    aria-hidden="true"
                  />
                </Popover.Button>
                <Transition
                  as={Fragment}
                  // enter="transition ease-out duration-200"
                  // enterFrom="opacity-0 translate-y-1"
                  // enterTo="opacity-100 translate-y-0"
                  // leave="transition ease-in duration-150"
                  // leaveFrom="opacity-100 translate-y-0"
                  // leaveTo="opacity-0 translate-y-1"
                  onMouseLeave={() => {
                    open ? close() : ''
                  }}
                >
                  <Popover.Panel
                    ref={setPopperElement}
                    style={styles.popper}
                    {...attributes.popper}
                    className="z-10 mt-3 w-screen max-w-sm px-4 sm:px-0 lg:max-w-3xl"
                  >
                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="relative grid gap-8 bg-white p-7 capitalize lg:grid-cols-2">
                        {items.map((item) => (
                          <PrismicLink
                            key={item.linktarget.url}
                            field={item.linktarget}
                            className="rounded-md px-3 py-2 text-xl font-semibold text-brand-primary hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-opacity-75"
                          >
                            {item.linktext}
                          </PrismicLink>
                        ))}
                      </div>
                      {/* <div className="bg-gray-50 p-4">
                        <a
                          href="##"
                          className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                        >
                          <span className="flex items-center">
                            <span className="text-sm font-medium text-gray-900">
                              Documentation
                            </span>
                          </span>
                          <span className="block text-sm text-gray-500">
                            Start integrating products and tools
                          </span>
                        </a>
                      </div> */}
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </li>
      )
    default:
      return (
        <li
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
          <PrismicLink
            field={linktarget}
            className="group inline-flex items-center rounded-md px-3 py-2 text-xl font-semibold text-brand-primary hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-opacity-75"
          >
            {linktext}
          </PrismicLink>
        </li>
      )
  }
}

export default MenuItem
