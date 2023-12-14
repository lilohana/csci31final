import React from 'react'

const ContactComponent = () => {
  return (
    <div className="flex flex-col">
      <div className="spacer bg-light">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="text-center">
              <h1 className="title font-bold">Contact Form</h1>
              <h6 className="subtitle">
                Here you can check Demos we created based on WrapKit. Its quite easy to Create your own dream website
                &amp; dashboard in No-time.
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="contact1">
        <div className="flex">
          <div className="container mx-auto px-4">
            <div className="spacer">
              <div className="flex m-0">
                <div className="contact-box p-r-40">
                  <h4 className="title">Quick Contact</h4>
                  <form>
                    <div className="flex flex-wrap">
                      <div className="m-t-15 w-full md:w-1/2">
                        <input type="text" placeholder="name" className="form-input" />
                      </div>
                      <div className="m-t-15 w-full md:w-1/2">
                        <input type="text" placeholder="email" className="form-input" />
                      </div>
                      <div className="m-t-15 w-full">
                        <textarea name="text" placeholder="message" className="form-input"></textarea>
                      </div>
                      <div className="w-full">
                        <button type="submit" className="btn btn-danger-gradiant m-t-20 btn-arrow">
                          <span>
                            Submit <i className="ti-arrow-right"></i>
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="detail-box p-40 bg-info">
                  <h2 className="text-white">Wrappixel Headquarters</h2>
                  <p className="text-white m-t-30 op-8">
                    251 546 9442
                    <br /> info@wrappixel.com
                  </p>
                  <p className="text-white op-8">
                    601 Sherwood Ave.
                    <br /> San Bernandino, CA 92404
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactComponent
