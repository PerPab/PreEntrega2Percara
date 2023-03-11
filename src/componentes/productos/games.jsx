const games = [
  {
    id: 1,
    category: "Xbox",
    description: "Xbox",
    image:
      "https://i.3djuegos.com/juegos/18024/forza_horizon_5/fotos/ficha/forza_horizon_5-5537465.jpg",
    price: "19.99",
    stock: "1000",
    title: "Forza Horizon",
  },

  {
    id: 2,
    category: "Playstation",
    description: "Playstation",
    image: "https://dixgamer.com/wp-content/uploads/2021/05/god-of-war-ps5.jpg",
    price: "49.99",
    stock: "1000",
    title: "God of war",
  },
  {
    id: 3,
    category: "Xbox",
    description: "Xbox",
    image:
      "https://i.3djuegos.com/juegos/18024/forza_horizon_5/fotos/ficha/forza_horizon_5-5537465.jpg",
    price: "19.99",
    stock: "1000",
    title: "Forza Horizon",
  },

  {
    id: 4,
    category: "Playstation",
    description: "Playstation",
    image: "https://dixgamer.com/wp-content/uploads/2021/05/god-of-war-ps5.jpg",
    price: "49.99",
    stock: "1000",
    title: "God of war",
  },
  {
    id: 5,
    category: "Xbox",
    description: "Xbox",
    image:
      "https://i.3djuegos.com/juegos/18024/forza_horizon_5/fotos/ficha/forza_horizon_5-5537465.jpg",
    price: "19.99",
    stock: "1000",
    title: "Forza Horizon",
  },

  {
    id: 6,
    category: "Playstation",
    description: "Playstation",
    image: "https://dixgamer.com/wp-content/uploads/2021/05/god-of-war-ps5.jpg",
    price: "49.99",
    stock: "1000",
    title: "God of war",
  },
  {
    id: 7,
    category: "Xbox",
    description: "Xbox",
    image:
      "https://i.3djuegos.com/juegos/18024/forza_horizon_5/fotos/ficha/forza_horizon_5-5537465.jpg",
    price: "19.99",
    stock: "1000",
    title: "Forza Horizon",
  },

  {
    id: 8,
    category: "Playstation",
    description: "Playstation",
    image: "https://dixgamer.com/wp-content/uploads/2021/05/god-of-war-ps5.jpg",
    price: "49.99",
    stock: "1000",
    title: "God of war",
  }
];


export const getGames =()=>{
    return new Promise((response, reject)=>{
        setTimeout(()=>{
            response(games);
        }, 2000);
    });
}

