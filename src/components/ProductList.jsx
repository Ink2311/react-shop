import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import "../App.css";

const ProductList = ({addToCart}) => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsData);
      } catch (error) {
        console.error("Ошибка на сервере", error);
      }
    };

    fetchProduct();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };


    const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery) ||
    product.description.toLowerCase().includes(searchQuery)
    );


  return (
    <div className="products">
      <h1>Список продуктов</h1>
      <input type="text" placeholder="Поиск товаров..." value={searchQuery} onChange={handleSearchChange} />
      <div className="product-cards">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-details">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h2 className="product-title">{product.name}</h2>
              <p className="product-description">{product.description}</p>
              <p className="product-price">Цена: {product.price}тг.</p>
              <button onClick={() => addToCart(product)}>Добавить в корзину</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
