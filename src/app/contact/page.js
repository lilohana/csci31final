import Image from 'next/image'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'
import Footer from '../components/Footer'
import ContactComponent from '../components/Contact'

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Contact" />
        <PageContent content="Here's the contact info" />
        <ContactComponent />
      </div>
      <Footer />
    </div>
  )
}
