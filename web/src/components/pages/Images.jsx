import { components } from "../../data/components"
import { Demo } from "../icons/Demo"
import { Github } from "../icons/Github"

const Images = () => {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center text-gray-200 mb-8">
        Images
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {components.images.map((component, index) => (
          <div
            key={index}
            className="bg-[#171717] shadow-lg p-6 rounded-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-100 mb-4">
              {component.name}
            </h2>

            <a href={component.fileUrl} target="_blank">
              <img
                src={component.image}
                alt={component.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
            </a>

            <p className="text-gray-400 mb-6">{component.description}</p>

            <div className="flex justify-between">
              <a
                href={component.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
              >
                <Demo />
                Demo
              </a>
              <a
                href={component.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-800 rounded-md hover:bg-gray-700 transition"
              >
                <Github />
                Código
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Images
