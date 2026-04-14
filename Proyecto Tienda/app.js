const productos = [
 { id: 1, nombre: "Mouse", categoria: "Periferico", precio: 50000, stock: 10, ventas: 12 },
 { id: 2, nombre: "Teclado", categoria: "Periferico", precio: 120000, stock: 5, ventas: 7 },
 { id: 3, nombre: "Monitor", categoria: "Pantalla", precio: 800000, stock: 2, ventas: 4 },
 { id: 4, nombre: "USB", categoria: "Accesorio", precio: 30000, stock: 0, ventas: 15 },
 { id: 5, nombre: "Diadema", categoria: "Audio", precio: 90000, stock: 8, ventas: 6 }
];

function mostrar() {
    productos.forEach(p => console.log(p));
}


function bajoStock(){
    return productos.filter(p => p.stock
        > 0 && p.stock <=5);
}

function agotados(){
    return productos.filter(p => p.stock 
        ===0);
}

function listaSimple(){
    return productos.map(p => `${p.nombre} - $${p.precio}`);
}

function inventarioTotal() {
  return productos.reduce((acc, p) => acc + p.precio * p.stock, 0);
}
function totalVentas() {
  return productos.reduce((acc, p) => acc + p.precio * p.ventas, 0);
}

function ordenarPorPrecio() {
  return [...productos].sort((a, b) => b.precio - a.precio);
}

function buscar(nombre) {
  return productos.find(p => p.nombre === nombre);
}

function hayAgotados() {
  return productos.some(p => p.stock === 0);
}

function todosDisponibles() {
  return productos.every(p => p.stock > 0);
}