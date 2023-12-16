import Image from 'next/image'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'
import Footer from '../components/Footer'
import CardFrom from '../components/CardForm'
import MyTable from '../components/MyTable'
import { findCards } from '../utils/supabase-client'

export const revalidate = 0

const cardTableColumns = [
  {
    title: 'Title',
    key: 'title',
  },
  {
    title: 'Subtitle',
    key: 'subtitle',
  },
  {
    title: 'Image',
    key: 'img',
  },
  {
    title: 'Description',
    key: 'description',
  },
]

export default async function ourStory() {
  const cards = await findCards()
  return (
    <div>
      <Navbar />
      <div>
        <PageTitle title="Our Story" />
        <PageContent content="Our Story" />
        <div
          className="bg-cover bg-center p-12 min-h-[1400px] flex flex-col items-end justify-start"
          style={{
            backgroundImage: `url(https://cropper.watch.aetnd.com/cdn.watch.aetnd.com/sites/2/2018/10/strongest-man-in-history-s1-mobile-3000x3000.jpg)`,
          }}
        ></div>
        <p className="text-3xl text-white p-20">
          In the rugged landscapes of Northern California, a local strongman dared to dream big. Fueled by a passion for
          strength and a vision for a community united by power, he embarked on a journey to establish the region&apos;s
          inaugural premier strongman gym. With unwavering determination, he transformed a mere idea into a powerhouse
          destination for those seeking to push their limits.
        </p>
        <div
          className="bg-cover bg-center m-12 p-12 min-h-[600px] rounded-lg flex flex-col items-end justify-start"
          style={{
            backgroundImage: `url(https://gen-tec.com.au/cdn/shop/articles/dc8639f9a0b0bac6288e9303886df92d_1151x.jpg?v=1613544086)`,
          }}
        >
          <p className="w-80 text-xl text-white">
            Our story begins with a commitment to authenticity, grit, and the relentless pursuit of strength. Inspired
            by the unique challenges posed by strongman competitions, our founder envisioned a space where individuals
            could sculpt their bodies, minds, and fortitude. This vision materialized into the stronghold that is now
            Northern California&apos;s first and foremost premier strongman gym.
          </p>
        </div>
        <div
          className="bg-cover bg-center m-12 p-12  min-h-[600px] flex flex-col items-end justify-start rounded-lg"
          style={{
            backgroundImage: `url(https://www.mensjournal.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_1188/MTk2MTM2NDM1MTQ0NDY3NjAx/main-strngman.webp)`,
          }}
        >
          <p className="w-80 text-xl text-white">
            Here, every piece of equipment tells a tale of resilience, echoing the spirit of those who enter our domain.
            From Atlas stones to yokes, each tool is a testament to the raw power that resides within our walls. Beyond
            the clang of weights, our community thrives on the camaraderie forged through shared sweat, triumphs, and
            the collective pursuit of greatness.
          </p>
        </div>
        <div
          className="bg-cover bg-center m-12 p-12 text-white min-h-[600px] flex flex-col items-end justify-start rounded-lg"
          style={{
            backgroundImage: `url(https://mirafit.co.uk/wp/wp-content/uploads/2023/05/strongman-Adam-Bisop-split-squat-with-Mirafit-Strongman-Yoke.jpg)`,
          }}
        >
          <p className="w-80 text-xl text-white">
            Northern California&apos;s premier strongman gym isn&apos;t just a place to lift; it&apos;s a haven for
            those who aspire to redefine their limits. Join us in the epicenter of strength, where the journey is as
            mighty as the lift. Welcome to a realm where ordinary becomes extraordinary, and every rep is a step toward
            realizing your strongest self.
          </p>
        </div>
        <CardFrom />
        <MyTable columns={cardTableColumns} records={cards} />
      </div>
      <Footer />
    </div>
  )
}
