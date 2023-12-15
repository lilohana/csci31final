import React from 'react'

const ContactComponent = () => {
  return (
    <section className="rounded-lg bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">Contact</h2>
        <p className="m-8 lg:mb-16 font-light text-center text-gray-400 sm:text-xl">
          Visit us at 123 Main Street, Chico, CA 95928
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label for="email" className="block mb-2 text-sm font-medium text-gray-300">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
              placeholder="name@site.com"
              require
            />
          </div>
          <div>
            <label for="subject" className="block mb-2 text-sm font-medium text-gray-300">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label for="message" className="block mb-2 text-sm font-medium text-gray-400">
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm rounded-lg shadow-sm borders bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 ocus:border-primary-500"
              placeholder="Leave a message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-gray-900 rounded-lg  sm:w-fit focus:outline-none focus:ring-primary-300 bg-gray-200 hover:bg-primary-700 focus:ring-primary-800"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactComponent
