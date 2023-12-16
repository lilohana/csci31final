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
        <p className="text-7xl text-white font-bold text-center">Welcome to Ironhaus</p>
        <p className="mt-10 mb-20 text-3xl font-light text-white text-center">
          North State&apos;s Premier Strongman Training Center
        </p>
        <div className="flex grow gap-6 justify-center flex-wrap lg:flex-nowrap">
          {cards.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              subtitle={card.subtitle}
              description={card.description}
              img={card.img}
            />
          ))}
        </div>
        <p className="text-white text-3xl pt-20">
          Welcome to Ironhaus, where strength takes center stage. As the North State&apos;s Premier Strongman Training
          Center, our facility is equipped with every specialty implement you could dream of for the sport of Strongman
          and Powerlifting. Train alongside seasoned veterans and be part of a community fueled by collective strength
          pursuits.
        </p>
        <Footer />
      </div>
    </div>
  )
}
