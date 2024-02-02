import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={product.imageUrl} alt={product.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Age: {product.age}</p>
                <p className="card-text">Price: ${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;



  