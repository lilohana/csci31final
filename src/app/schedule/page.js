import Image from 'next/image'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'
import Footer from '../components/Footer'

export default function Schedule() {
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Schedule" />
        <PageContent content="schedule and events" />
      </div>
      <Footer />
    </div>
  )
}
