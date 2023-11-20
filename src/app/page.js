import Image from 'next/image'
import Navbar from './components/Navbar'
import PageTitle from './components/PageTitle'
import PageContent from './components/PageContent'
import Card from './components/Card'
import Footer from './components/Footer'

import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://mzgowbeebyxaznsntkxx.supabase.co', process.env.SUPABASE_SERVICE_ROLE_KEY)

export const revalidate = 0

export default async function Home() {
  const { data: cards, error } = await supabase.from('cards').select('*')

  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Home" />
        <PageContent content="North State's Premier Strongman Training Center" />
        <div className="flex flex-wrap w-full gap-6 my-6">
          {cards.map((card, idx) => (
            <Card key={idx} title={card.title} subtitle={card.subtitle} description={card.description} img={card.img} />
          ))}
        </div>
        <PageContent content="North State's Premier Strongman Training Center" />
        <Footer />
      </div>
    </div>
  )
}
