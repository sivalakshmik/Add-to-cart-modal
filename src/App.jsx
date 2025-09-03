import { useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartModal from './components/CartModal';
import './App.css';
import './index.css';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleAddToCart = (product) => {
    if (cartItems.some(item => item.id === product.id)) return;
    setCartItems([...cartItems, product]);
  };

  const handleRemoveFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div>
  
     <div className="container" >
      <Navbar
        cartCount={cartItems.length}
        onCartClick={() => setShowModal(true)}
      />
      
      <ProductList
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        cartItems={cartItems}
        onAddToCart={handleAddToCart}
      />

      {showModal && (
        <CartModal
          cartItems={cartItems}
          onClose={() => setShowModal(false)}
          onRemove={handleRemoveFromCart}
        />
       
      )}
       </div>
    </div>
  );
}
