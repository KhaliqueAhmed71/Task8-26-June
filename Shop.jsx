import { useState } from 'react';

const products = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Phone', price: 500 },
  { id: 3, name: 'Headphones', price: 100 }
];

export default function Shop() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h1 className="text-2xl mb-4">Products</h1>
      {products.map((product) => (
        <div key={product.id} className="mb-2">
          <span>{product.name} - ${product.price}</span>
          <button
            onClick={() => addToCart(product)}
            className="ml-2 p-1 bg-green-200 hover:bg-green-300"
          >
            Add to Cart
          </button>
        </div>
      ))}
      <h2 className="text-xl mt-6">Cart</h2>
      {cart.map((item, index) => (
        <div key={index}>{item.name} - ${item.price}</div>
      ))}
      <p className="mt-2">Total: ${total}</p>
    </div>
  );
}
