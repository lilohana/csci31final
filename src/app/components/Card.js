export default function Card({
  title = 'Default Title',
  subtitle = 'Default Subtitle',
  description = 'Default Description',
  img = 'https://people.com/thmb/Mt39TZIznfUd6jw54_JxCZI8Cd8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(734x164:736x166)/ED-SHEERAN-album-092923-1-70e3c2d64c614c07a301edf7ba1657fc.jpg',
}) {
  return (
    <div className="border-solid border border-gray-500 shadow-lg bg-gray-100 text-gray-900 rounded-xl transition-transform hover:scale-[1.05] cursor-pointer grow w-full sm:w-1/2 md:w-1/4">
      <img className="w-full rounded-xl" src={img} />
      <h1 className="font-bold text-xl px-5 pt-4 pb-2 underline cursor-pointer">{title}</h1>
      <h2 className="text-lg px-5">{subtitle}</h2>
      <p className="text-base px-5 py-2">{description}</p>
    </div>
  )
}
