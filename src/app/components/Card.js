import Link from 'next/link'

const cardLinks = {
  1: '/our-story',
  2: '/schedule',
  3: '/join-now',
}

export default function Card({
  id,
  title = 'Default Title',
  subtitle = 'Default Subtitle',
  description = 'Default Description',
  img = 'https://people.com/thmb/Mt39TZIznfUd6jw54_JxCZI8Cd8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(734x164:736x166)/ED-SHEERAN-album-092923-1-70e3c2d64c614c07a301edf7ba1657fc.jpg',
}) {
  const href = cardLinks[id]
  return (
    <Link href={href}>
      <div className="border-solid border-2 border-gray-500 p-6 bg-gray-100 rounded-lg shadow-md text-gray-900 hover:scale-105 transition-transform cursor-pointer grow max-w-md">
        <img className="rounded-xl" src={img} />
        <h1 className="font-bold text-xl px-5 pt-4 pb-2 underline cursor-pointer">{title}</h1>
        <h2 className="text-lg px-5">{subtitle}</h2>
        <p className="text-base px-5 py-2">{description}</p>
      </div>
    </Link>
  )
}
