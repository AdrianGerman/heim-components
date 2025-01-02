import React from "react"

export const components = {
  cards: [
    {
      name: "Card Simple",
      description: "Un componente de tarjeta simple.",
      image: "/projects/cards/01.webp",
      fileUrl: "/projects/cards/simple-card.html",
      codeUrl:
        "https://github.com/AdrianGerman/templates-heim/blob/main/web/public/projects/simple-card.html",
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
