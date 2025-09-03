
 const ProductCard = ({ product, onAddToCart, isInCart }) => {

  console.log("onAddToCart type:", typeof onAddToCart);

  return(
  <div className="bg-white border p-3 rounded shadow hover:shadow-lg">
    <img src={product.image} alt={product.title} className="h-40 mx-auto" />
    <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
    <p className="text-green-600 font-bold">${product.price}</p>
    <button
      onClick={() => onAddToCart(product)}
      className="mt-2 bg-blue-500 text-white px-3 py-1 rounded" >
      Add to Cart
    </button>
    {isInCart && <p className="text-red-500 mt-1">Item already added to the cart</p>}
  </div>

);
 }
export default ProductCard;
