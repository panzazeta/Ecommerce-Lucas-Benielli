const productos = [
  { id: "1", nombre: "El Aleph", precio: 2000, idCat: "2", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQthM-D5jx1SK_8umv_dWQziQPc7UdMp_a7Zw&usqp=CAU"},
  { id: "2", nombre: "Ficciones",precio: 2300, idCat: "2", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbflBHGggMUcjuxV3kj2mVZBnujOq_7qJYpg&usqp=CAU"},
  { id: "3", nombre: "Rayuela",  precio: 3400, idCat: "1", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMMU08LrlfWQltqap9YRoCxrFji6ubkFlaEw&usqp=CAU"},
  { id: "4", nombre: "Autorretrato en espejo convexo", precio: 3300, idCat: "3", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwKN1dpaEYbpNRcEaxgT7G26ifz1VrbhsJvUoNJb9bUWP4sJTKxP0EI4rIzJkR4Dmqyf8&usqp=CAU"},
  { id: "5", nombre: "Indeterminación",  precio: 3700, idCat: "3", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPLXacLhKHHkl57YIoW2OPkuvcKyqZtN9oIw&usqp=CAU://d3ugyf2ht6aenh.cloudfront.net/stores/235/530/products/cage-tapa-jpg1-b35b60372510dcd2d015241702831858-240-0.jpg"},
  { id: "6", nombre: "Libro del desasosiego",  precio: 4400, idCat: "3", img: "https://contentv2.tap-commerce.com/cover/large/9788492649471_1.jpg?id_com=1102&r=pad"},
  { id: "7", nombre: "El cine según Hitchcock",  precio: 6500, idCat: "4", img: "https://contentv2.tap-commerce.com/cover/small/9789873797521_1.jpg?id_com=1102&w=160&h=250&r=bpad&back=FAF6EB"},
  { id: "8", nombre: "Tres ensayos sobre Twin Peaks",  precio: 9900, idCat: "4", img: "https://contentv2.tap-commerce.com/cover/large/9788412073874_1.jpg?id_com=1102&r=pad"},
  { id: "9", nombre: "2666",  precio: 13499, idCat: "1", img: "https://contentv2.tap-commerce.com/cover/small/9789877387735_1.jpg?id_com=1102&w=160&h=250&r=bpad&back=FAF6EB"},
  { id: "10", nombre: "Yo el supremo",  precio: 6600, idCat: "1", img: "https://contentv2.tap-commerce.com/cover/small/9789877121216_1.jpg?id_com=1102&w=160&h=250&r=bpad&back=FAF6EB"},
];

export const getProductos = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(productos);
    }, 2000);
  });
};

export const getUnProducto = (id) => {
  return new Promise((res) => {
    setTimeout(() => {
      const producto = productos.find((prod) => prod.id === id);
      res(producto);
    }, 2000);
  });
};

export const getProductosPorCategoria = (idCategoria) => {
  return new Promise (resolve => {
    setTimeout( () => {
     const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
     resolve(productosCategoria);
    },2000)
 })
}