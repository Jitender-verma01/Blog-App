import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <footer className="bg-gray-400 border border-t-2 border-black py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-5/12 px-4">
            <div className="flex flex-col justify-between h-full">
              <div className="mb-4 inline-flex items-center">
                <Logo width="100px" />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/12 px-4">
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase text-gray-900">
                Company
              </h3>
              <ul>
                <li className="mb-2">
                  <Link className="font-medium text-gray-900 hover:text-gray-700" to="/">
                    Features
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/12 px-4">
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase text-gray-900">
                Support
              </h3>
              <ul>
                <li className="mb-2">
                  <Link className="font-medium text-gray-900 hover:text-gray-700" to="/">
                    Account
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="font-medium text-gray-900 hover:text-gray-700" to="/">
                    Help
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="font-medium text-gray-900 hover:text-gray-700" to="/">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link className="font-medium text-gray-900 hover:text-gray-700" to="/">
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-3/12 px-4">
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase text-gray-900">
                Legals
              </h3>
              <ul>
                <li className="mb-2">
                  <Link className="font-medium text-gray-900 hover:text-gray-700" to="/">
                    Terms & Conditions
                  </Link>
                </li>
                <li className="mb-2">
                  <Link className="font-medium text-gray-900 hover:text-gray-700" to="/">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="font-medium text-gray-900 hover:text-gray-700" to="/">
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm text-gray-900">
                &copy; Copyright 2024. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
