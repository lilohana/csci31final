import Image from 'next/image'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'

export default function ourStory() {
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Our Story" />
        <PageContent
          content="In the rugged landscapes of Northern California, a local strongman dared to dream big. Fueled by a passion for strength and a vision for a community united by power, he embarked on a journey to establish the region's inaugural premier strongman gym. With unwavering determination, he transformed a mere idea into a powerhouse destination for those seeking to push their limits.

Our story begins with a commitment to authenticity, grit, and the relentless pursuit of strength. Inspired by the unique challenges posed by strongman competitions, our founder envisioned a space where individuals could sculpt their bodies, minds, and fortitude. This vision materialized into the stronghold that is now Northern California's first and foremost premier strongman gym.

Here, every piece of equipment tells a tale of resilience, echoing the spirit of those who enter our domain. From Atlas stones to yokes, each tool is a testament to the raw power that resides within our walls. Beyond the clang of weights, our community thrives on the camaraderie forged through shared sweat, triumphs, and the collective pursuit of greatness.

Northern California's premier strongman gym isn't just a place to lift; it's a haven for those who aspire to redefine their limits. Join us in the epicenter of strength, where the journey is as mighty as the lift. Welcome to a realm where ordinary becomes extraordinary, and every rep is a step toward realizing your strongest self."
        />
      </div>
    </div>
  )
}
