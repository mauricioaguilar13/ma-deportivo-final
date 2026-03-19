// store/cart.js
export let carrito = [];

export const agregarAlCarrito = (producto) => {
  carrito.push(producto);
  console.log("Producto agregado:", producto);
};

export const limpiarCarrito = () => {
  carrito.length = 0; // Esto limpia el array correctamente
};
