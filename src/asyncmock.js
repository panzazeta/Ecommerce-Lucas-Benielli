const productos = [
  { id: "1", nombre: "El Aleph", precio: 2000, idCat: "2", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQthM-D5jx1SK_8umv_dWQziQPc7UdMp_a7Zw&usqp=CAU"},
  { id: "2", nombre: "Ficciones",precio: 2300, idCat: "2", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbflBHGggMUcjuxV3kj2mVZBnujOq_7qJYpg&usqp=CAU"},
  { id: "3", nombre: "Rayuela",  precio: 3400, idCat: "3", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMMU08LrlfWQltqap9YRoCxrFji6ubkFlaEw&usqp=CAU"},
  { id: "4", nombre: "Autorretrato en espejo convexo", precio: 3300, idCat: "3", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwKN1dpaEYbpNRcEaxgT7G26ifz1VrbhsJvUoNJb9bUWP4sJTKxP0EI4rIzJkR4Dmqyf8&usqp=CAU"},
];

export const getProductos = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(productos);
    }, 100);
  });
};

export const getUnProducto = (id) => {
  return new Promise((res) => {
    setTimeout(() => {
      const producto = productos.find((prod) => prod.id === id);
      res(producto);
    }, 100);
  });
};

export const getProductosPorCategoria = (idCategoria) => {
  return new Promise (resolve => {
    setTimeout( () => {
     const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
     resolve(productosCategoria);
    },100)
 })
}