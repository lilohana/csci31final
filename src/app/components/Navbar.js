import { TrophyIcon } from '@heroicons/react/24/solid'

const menuItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'JOIN NOW',
    href: '/join-now',
  },
  {
    title: 'Our Story',
    href: '/our-story',
  },
  {
    title: 'Schedule',
    href: '/schedule',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
]

export default function Navbar() {
  return (
    <div className="flex justify-between items-center gap-4 m-12">
      <TrophyIcon className="h-12 w-12 text-gray-700" />
      <div className="flex gap-4">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="px-4 py-2 bg-gray-400 text-gray-100 text-lg shadow-md rounded-md hover:bg-gray-700 active:bg-gray-800 transition-all"
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  )
}
