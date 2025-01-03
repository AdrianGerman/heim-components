import React from "react"

export const components = {
  cards: [
    {
      name: "Card Simple",
      description: "Un componente de tarjeta simple.",
      image: "/projects/cards/01.webp",
      fileUrl: "/projects/cards/simple-card.html",
      codeUrl: ""
    }
  ],
  images: [
    {
      name: "Image animation scroll",
      description: "Galería de imágenes con efecto vertical de scroll.",
      image: "/projects/images/02.webp",
      fileUrl: "/projects/images/image-scroll.html",
      codeUrl: ""
    },
    {
      name: "Image gallery vertical",
      description: "Galería de imagines vertical con transiciones.",
      image: "/projects/images/03.webp",
      fileUrl: "/projects/images/image-gallery-vertical.html",
      codeUrl: ""
    },
    {
      name: "Image smart shadow",
      description:
        "Fondo de imagen personalizado en base a la imagen principal.",
      image: "/projects/images/04.webp",
      fileUrl: "/projects/images/smart-shadow.html",
      codeUrl: ""
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
