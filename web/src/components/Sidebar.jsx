import { Link } from "react-router-dom"

const sections = [
  { name: "Home", path: "/" },
  { name: "Cards", path: "/cards" }
]

const Sidebar = () => {
  return (
    <nav className="w-64 bg-[#171717] text-white h-full p-4">
      <h2 className="text-xl font-bold mb-6">Secciones</h2>
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.name}>
            <Link
              to={section.path}
              className="block px-4 py-2 rounded hover:bg-gray-700"
            >
              {section.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Sidebar
