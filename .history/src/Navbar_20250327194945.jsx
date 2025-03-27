import React from 'react'

const Navbar = () => {
  return (
    <div>
         <header className="bg-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Audit Ease</span>
            Audit Ease
          </a>
        </div>
        <div>
            For dynamic content
        </div>
         
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <div className='flex space-x-3'>
        <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Search for something
          </a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
          <button className=''><i className="bi bi-gear"></i></button>
          </a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
          <i className="bi bi-bell"></i>
          </a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            <img src="./" alt="" /><span aria-hidden="true">&rarr;</span>
          </a>
        </div>
        </div>
      </nav>

        <div className="fixed inset-0 z-10" />
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Dashboard
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Audits
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Clients
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Articles
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Logout
                </a>
              </div>
            </div>
          </div>
    
    </header>
    </div>
  )
}

export default Navbar