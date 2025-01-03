import { Link } from "react-router-dom"
import { Menu } from "./icons/Menu"

const sections = [
  { name: "Home", path: "/" },
  { name: "Cards", path: "/cards" },
  { name: "Images", path: "/images" }
]

const Sidebar = ({ toggleSidebar }) => {
  return (
    <nav className="w-64 bg-[#171717] text-white h-full p-4 relative shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Secciones</h2>
        <button className="" onClick={toggleSidebar}>
          <Menu />
        </button>
      </div>
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.name}>
            <Link
              to={section.path}
              className="block p-2 rounded hover:bg-[#212121]"
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
