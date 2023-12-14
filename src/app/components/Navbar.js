const menuItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Membership',
    href: '/membership',
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
    <div className="flex justify-between items-center gap-4 mx-12 my-4">
      <a className="h-40 w-40">
        <img src="logo.png" alt="Logo" />
      </a>
      <div className="flex gap-4">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="px-4 py-2 bg-gray-600 text-gray-100 text-lg shadow-md rounded-md hover:bg-gray-700 active:bg-gray-800 transition-all"
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  )
}
