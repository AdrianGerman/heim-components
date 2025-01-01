import React from "react"
import { components } from "../../data/components"
import { Link } from "react-router-dom"

const Cards = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Cards</h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {components.cards.map((component, index) => (
          <div key={index} className="bg-[#282828] shadow-lg p-4 rounded">
            <h2 className="text-lg font-semibold">{component.name}</h2>
            <img
              src={component.image}
              alt={component.name}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <p>{component.description}</p>
            <a
              target="_blank"
              href={component.url}
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded hover:bg-blue-700"
            >
              Ver archivo
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards
