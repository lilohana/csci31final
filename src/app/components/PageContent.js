const defaultContent = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`

export default function PageContent({ content = defaultContent }) {
  return (
    <main className="bg-gradient-to-r from-black to-gray-900 rounded-md pb-8 text-5xl text-white font-medium flex items-center justify-center text-center">
      <p>{content}</p>
    </main>
  )
}
