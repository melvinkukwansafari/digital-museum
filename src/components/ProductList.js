import React from 'react';





const ProductList = ({ products }) => {
  return (
    <div>
      {products.map(product => (
        <div key={product.id} className="product-item">
          <img src={product.imageUrl} alt={product.name} />
          <div className="product-details">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Age: {product.age}</p>
            <p>Price: ${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

  