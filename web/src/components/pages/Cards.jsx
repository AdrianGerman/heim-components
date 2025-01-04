import { useState } from "react"
import { components } from "../../data/components"
import { Demo } from "../icons/Demo"
import { Github } from "../icons/Github"

const Cards = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [codeToShow, setCodeToShow] = useState("")
  const [loadingCode, setLoadingCode] = useState(false)

  const openModal = async (codeUrl) => {
    setLoadingCode(true)
    setIsModalOpen(true)
    try {
      const response = await fetch(codeUrl)
      const code = await response.text()
      setCodeToShow(code)
    } catch (error) {
      setCodeToShow("Error al cargar el código. Por favor, intenta nuevamente.")
    } finally {
      setLoadingCode(false)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setCodeToShow("")
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeToShow)
    alert("Código copiado al portapapeles!")
  }

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center text-gray-200 mb-8">
        Cards
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {components.cards.map((component, index) => (
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

            <div className="flex justify-between sm:gap-1">
              <a
                href={component.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
              >
                <Demo />
                Demo
              </a>
              <button
                onClick={() => openModal(component.codeUrl)} // Carga el código desde el archivo
                className="flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-800 rounded-md hover:bg-gray-700 transition"
              >
                <Github />
                Código
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-[#171717] p-6 rounded-lg w-11/12 md:w-3/4 lg:w-2/3 h-3/5 shadow-lg flex flex-col">
            <h2 className="text-xl font-bold text-gray-100 mb-4">Código</h2>
            {loadingCode ? (
              <p className="text-gray-400">Cargando código...</p>
            ) : (
              <pre
                className="bg-gray-800 p-4 rounded-lg text-sm text-gray-300 overflow-auto flex-grow"
                style={{ maxHeight: "100%", overflowY: "auto" }}
              >
                {codeToShow}
              </pre>
            )}
            <div className="flex justify-end gap-4 mt-4">
              <button
                onClick={copyToClipboard}
                className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
              >
                Copiar código
              </button>
              <button
                onClick={closeModal}
                className="px-4 py-2 text-sm text-white bg-red-600 rounded-md hover:bg-red-700 transition"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cards
