import Image from 'next/image'
import Navbar from './components/Navbar'
import PageTitle from './components/PageTitle'
import PageContent from './components/PageContent'
import Card from './components/Card'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Home" />
        <PageContent content="North State's Premier Strongman Training Center" />
        <div class="flex flex-wrap w-full gap-6 my-6">
          <Card title="Our Story" subtitle="Subtitle" description="description" />
          <Card title="Schedule" subtitle="Subtitle" description="description" />
          <Card title="Sign Up Now" subtitle="Subtitle" description="description" />
        </div>
        <PageContent content="North State's Premier Strongman Training Center" />
      </div>
    </div>
  )
}
