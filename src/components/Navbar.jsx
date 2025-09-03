
const Navbar = ({ onFilterChange, cartCount, onCartClick }) => (
  <nav className="flex justify-between items-center p-4 bg-yellow-300 text-black">
    <h1 className="text-xl font-bold">🦄 Fake Store</h1>

    <button onClick={onCartClick} className="relative"> 🛒Cart ({cartCount})
    </button>

  </nav>

);


export default Navbar;