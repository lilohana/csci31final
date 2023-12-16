import Image from 'next/image'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'
import Footer from '../components/Footer'
import Script from 'next/script'

export default function Schedule() {
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Schedule" />
        <PageContent content="Training Schedule" />
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/ironhaus/sundaystrongman"
          style={{ minWidth: '320px', height: '700px' }}
        ></div>
        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
      </div>
      <Footer />
    </div>
  )
}
