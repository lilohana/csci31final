export default function Button({ children, onClick, type = 'button' }) {
  return (
    <button
      className="px-4 py-2 bg-gray-700 rounded-md shadow-md text-gray-100 hover:bg-gray-800 active:bg-gray-900 transition-all"
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
