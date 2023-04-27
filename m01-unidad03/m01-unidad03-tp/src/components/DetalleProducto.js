import React from 'react';

const DetalleProducto = ({ nombre, descripcion, precio, sku, cantidad }) => {
  return (
    <div>
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
      <p>precio: {precio}</p>
      <p>SKU: {sku}</p>
      <p>Cantidad disponible: {cantidad}</p>
    </div>
  );
};

export default DetalleProducto;