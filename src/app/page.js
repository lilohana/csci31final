import Image from 'next/image'
import Navbar from './components/Navbar'
import PageTitle from './components/PageTitle'
import PageContent from './components/PageContent'
import Card from './components/Card'
import Footer from './components/Footer'
import { findCards } from './utils/supabase-client'

export const revalidate = 0

export default async function Home() {
  const cards = await findCards()

  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Ironhaus" />
        <PageContent content="North State's Premier Strongman Training Center" />
        <div className="flex flex-wrap flex-auto gap-6 my-6">
          {cards.map((card) => (
            <Card
              id={card.id}
              title={card.title}
              subtitle={card.subtitle}
              description={card.description}
              img={card.img}
            />
          ))}
        </div>
        <PageContent content="Welcome to Ironhaus, where strength takes center stage. As the North State's Premier Strongman Training Center, our facility is equipped with every specialty implement you could dream of for the sport of Strongman and Powerlifting. Train alongside seasoned veterans and be part of a community fueled by collective strength pursuits." />
        <Footer />
      </div>
    </div>
  )
}
