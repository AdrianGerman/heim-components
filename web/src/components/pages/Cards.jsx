import { components } from "../../data/components"

const Cards = () => {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center text-gray-200 mb-8">
        Cards
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {components.cards.map((component, index) => (
          <div
            key={index}
            className="bg-gray-800 shadow-lg p-6 rounded-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">
              {component.name}
            </h2>

            <img
              src={component.image}
              alt={component.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />

            <p className="text-gray-300 mb-6">{component.description}</p>

            <div className="flex justify-between">
              <a
                href={component.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
              >
                Previsualizar
              </a>
              <a
                href={component.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-medium text-center text-white bg-gray-600 rounded-lg hover:bg-gray-700 transition"
              >
                Código
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards
