import { Github } from "./icons/Github"

const Home = () => {
  return (
    <>
      <section className="flex justify-center items-center flex-col sm:w-full lg:w-2/3 gap-6 mt-60 m-auto">
        <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#883aea] via-[#f4edfc] to-[#ffff]">
          Heim components
        </h1>
        <p>
          Bienvenido a este catalogo de componentes de css y tailwind, espero
          puedas encontrar algo de tu agrado, estoy abierto a sugerencias!
        </p>
        <a
          href="https://github.com/AdrianGerman/templates-heim"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center justify-center px-2 py-1 text-sm font-semibold text-center text-white bg-black/50 border border-black rounded-lg md:px-4 md:py-2 md:text-sm transform transition duration-300 hover:border-gray-500 hover:scale-105"
        >
          <Github />
          Repositorio
        </a>
      </section>
    </>
  )
}

export default Home
