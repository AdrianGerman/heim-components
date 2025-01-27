import { useState } from "react"
import { Demo } from "./icons/Demo"
import { Github } from "./icons/Github"

const Section = ({ title, data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [codeToShow, setCodeToShow] = useState("")
  const [loadingCode, setLoadingCode] = useState(false)
  const [codeType, setCodeType] = useState("htmlCss")

  const openModal = async (component) => {
    setLoadingCode(true)
    setIsModalOpen(true)
    try {
      const response = await fetch(
        codeType === "htmlCss"
          ? component.codeUrlHtmlCss
          : component.codeUrlTailwind
      )
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
    setCodeType("htmlCss")
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeToShow)
    alert("Código copiado al portapapeles!")
  }

  return (
    <div className="max-w-7xl m-auto">
      <h1 className="text-4xl font-bold text-center text-gray-200 mb-8">
        {title}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {data.map((component, index) => (
          <div
            key={index}
            className="bg-[#171717] shadow-lg p-6 rounded-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 min-w-60"
          >
            <h2 className="text-xl font-semibold text-gray-100 mb-4">
              {component.name}
            </h2>

            <a href={component.fileUrl} target="_blank">
              <img
                src={component.image}
                alt={component.name}
                className="w-full max-h-60 object-cover rounded-md mb-4"
              />
            </a>

            <p className="text-gray-400 mb-6">{component.description}</p>

            <div className="flex gap-2">
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
                onClick={() => openModal(component)}
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
            <div className="flex gap-4 mb-4">
              <button
                onClick={() => setCodeType("htmlCss")}
                className={`px-4 py-2 text-sm text-white rounded-md transition ${
                  codeType === "htmlCss"
                    ? "bg-blue-600"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                HTML & CSS
              </button>
              <button
                onClick={() => setCodeType("tailwind")}
                className={`px-4 py-2 text-sm text-white rounded-md transition ${
                  codeType === "tailwind"
                    ? "bg-blue-600"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                Tailwind CSS
              </button>
            </div>
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

export default Section
