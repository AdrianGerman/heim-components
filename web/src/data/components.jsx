import React from "react"

export const components = {
  cards: [
    {
      name: "Card Simple",
      description: "Un componente de tarjeta simple.",
      image: "/projects/01.webp",
      url: "/projects/simple-card.html",
      render: () => <div className="p-4 border rounded">Simple card</div>
    }
  ],
  loaders: [
    {
      name: "Loader Circular",
      description: "Un loader circular simple.",
      render: () => <div className="loader-circle"></div>
    }
  ]
}
