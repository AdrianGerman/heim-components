import { Github } from "./icons/Github"
import { Twitter } from "./icons/Twitter"

const Home = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <section className="flex justify-center items-center flex-col sm:w-full lg:w-1/3 w-2/3 gap-6 m-auto animate-fade-in-up">
        <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#883aea] via-[#f4edfc] to-[#ffff]">
          Heim components
        </h1>
        <p>
          Bienvenido a este catalogo de componentes de css y tailwind, espero
          puedas encontrar algo de tu agrado, estoy abierto a sugerencias!
        </p>
        <div className="flex gap-2">
          <a
            href="https://github.com/AdrianGerman/templates-heim"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center text-sm font-semibold text-center text-white bg-black/50 border border-black rounded-lg px-4 py-2 md:text-sm transform transition duration-300 hover:border-gray-500 hover:scale-105"
          >
            <Github />
            Repositorio
          </a>
          <a
            href="https://x.com/HeimCode"
            target="_blank"
            rel="noopener"
            className="inline-flex gap-1 items-center justify-center text-sm font-semibold text-center text-white bg-blue-900/40 border border-slate-900 rounded-lg px-4 py-2 md:text-sm transform transition duration-300 hover:border-black/80 hover:scale-105"
          >
            <Twitter />
            Contacto
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home
