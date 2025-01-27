import { useState } from "react"
import { Demo } from "./icons/Demo"
import { Github } from "./icons/Github"
import { CloseIcon } from "./icons/CloseIcon"

const Section = ({ title, data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [codeToShow, setCodeToShow] = useState("")
  const [loadingCode, setLoadingCode] = useState(false)
  const [activeCodeType, setActiveCodeType] = useState("HTML/CSS")
  const [currentComponent, setCurrentComponent] = useState(null)
  const [isFading, setIsFading] = useState(false)

  const openModal = (component) => {
    setIsModalOpen(true)
    setCurrentComponent(component)
    loadCode(component.codeUrlHtmlCss)
    setActiveCodeType("HTML/CSS")
  }

  const loadCode = async (codeUrl) => {
    setLoadingCode(true)
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
    setCurrentComponent(null)
    setActiveCodeType("HTML/CSS")
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeToShow)
    alert("Código copiado al portapapeles!")
  }

  const handleCodeTypeChange = (codeType) => {
    if (currentComponent) {
      const codeUrl =
        codeType === "HTML/CSS"
          ? currentComponent.codeUrlHtmlCss
          : currentComponent.codeUrlTailwind
      setIsFading(true)
      setTimeout(() => {
        setActiveCodeType(codeType)
        loadCode(codeUrl)
        setIsFading(false)
      }, 300)
    }
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
      {isModalOpen && currentComponent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-[#171717] p-6 rounded-lg w-11/12 md:w-3/4 lg:w-2/3 h-4/5 shadow-lg flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-100">
                Código - {activeCodeType}
              </h2>
              <button onClick={closeModal} className="text-sm">
                <CloseIcon className=" text-red-600 rounded-md hover:text-red-900 transition" />
              </button>
            </div>

            <div className="flex justify-start gap-4 mb-4">
              <button
                onClick={() => handleCodeTypeChange("HTML/CSS")}
                className={`px-4 py-2 text-sm rounded-md ${
                  activeCodeType === "HTML/CSS"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                } transition`}
              >
                HTML/CSS
              </button>
              <button
                onClick={() => handleCodeTypeChange("Tailwind CSS")}
                className={`px-4 py-2 text-sm rounded-md ${
                  activeCodeType === "Tailwind CSS"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                } transition`}
              >
                Tailwind CSS
              </button>
            </div>

            <div
              className={`transition-opacity duration-300 overflow-auto ${
                isFading ? "opacity-0 pointer-events-none" : "opacity-100"
              } flex-grow`}
            >
              {loadingCode ? (
                <p className="text-gray-400">Cargando código...</p>
              ) : (
                <pre
                  className="bg-gray-800 p-4 rounded-lg text-sm text-gray-300"
                  style={{ maxHeight: "100%", overflowY: "auto" }}
                >
                  {codeToShow}
                </pre>
              )}
            </div>

            <div className="flex justify-end gap-4 mt-4">
              <button
                onClick={copyToClipboard}
                className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
              >
                Copiar código
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Section
