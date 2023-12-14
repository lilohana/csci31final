/* eslint-disable */
import React from 'react'
import { Card, CardBody } from 'reactstrap'
import { CheckIcon } from '@heroicons/react/20/solid'

const cards = [
  {
    title: 'Introduction Package',
    price: '$79',
    features: ['1-month trial package', 'Valid for 1 Month', '24/7 Access'],
  },
  {
    title: 'Monthly Membership',
    price: '$129',
    features: ['Recurring every Month', '24/7 Access'],
  },
  {
    title: 'Private Membership',
    price: '$199',
    features: ['4 Monthly One-On-One Private Sessions', 'Recurring every Month', '24/7 Access'],
  },
]

const PricingComponent = () => {
  return (
    <div className="bg-gradient-to-r from-black to-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">Membership Options</h2>
        </div>
        <div className="mx-auto mt-16 max-w-2xl  sm:mt-20 lg:mx-0 lg:flex lg:max-w-none lg:flex-row lg:justify-around lg:gap-16">
          {cards.map((card, index) => (
            <div key={card} className="rounded-3xl ring-1 ring-gray-200 mb-32 flex flex-col w-full justify-between">
              <div className="p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-4xl font-bold tracking-tight text-gray-100">{card.title}</h3>
                <div className="mt-10 flex items-center gap-x-4">
                  <h4 className="flex-none text-lg font-semibold leading-6 text-indigo-600">What’s included</h4>
                  <div className="h-px flex-auto bg-gray-100" />
                </div>
                <ul
                  role="list"
                  className="mt-8 grid grid-cols-1 gap-4 text-lg leading-6 text-gray-100 sm:grid-cols-2 sm:gap-6"
                >
                  {card.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div className="bg-gray-100 rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                  <div className="mx-auto max-w-xs px-8">
                    <p className="flex items-baseline justify-center gap-x-2">
                      <span className="text-5xl font-bold tracking-tight text-gray-900">{card.price}</span>
                    </p>
                    <a
                      href="#"
                      className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Join Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PricingComponent
