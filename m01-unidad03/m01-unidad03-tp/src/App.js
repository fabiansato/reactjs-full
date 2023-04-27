import React from 'react';
import DetalleProducto from './components/DetalleProducto';

function App() {
  return (
    <div className="App">
      <DetalleProducto
        nombre="Nombre del producto"
        descripcion="Descripcion del producto"
        precio="$800"
        sku="123456789151651"
        cantidad="10"
      />
    </div>
  );
}

export default App;