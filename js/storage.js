import { carrito } from './index.js'

const guardarCarrito = () => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
};

const obtenerCarrito = () => {
    const carritoStorage = JSON.parse(localStorage.getItem('carrito'));
    return carritoStorage
};

export { guardarCarrito, obtenerCarrito};