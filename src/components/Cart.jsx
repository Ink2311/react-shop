import React from "react";
import "../App.css";

const Cart = ({ cart, toggleCart, removeFromCart }) => {
  const totalPrice = cart.reduce((total, product) => total + +product.price, 0);

  return (
    <div className="cart-container">
      <div>
        <button onClick={toggleCart}>Закрыть</button>
        <h2>Ваша корзина</h2>
        {cart.length === 0 ? (
          <p>Корзина пуста</p>
        ) : (
          <ul>
            {cart.map((product) => (
              <li key={product.id}>
                <h3>{product.name}</h3>
                <p>Цена: {product.price}₽</p>
                <button onClick={() => removeFromCart(product.id)}>
                  Удалить
                </button>
              </li>
            ))}
          </ul>
        )}
        <h3>Общая стоимость {totalPrice}</h3>
      </div>
    </div>
  );
};

export default Cart;
