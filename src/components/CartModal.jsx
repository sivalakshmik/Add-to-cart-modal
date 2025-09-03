const CartModal = ({ cartItems, onClose, onRemove }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div className="bg-white p-6 rounded w-11/12 max-w-md">
      <h2 className="text-xl font-bold mb-4">🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id} className="flex justify-between items-center mb-2">
            <span>{item.title}</span>
            <button
              onClick={() => onRemove(item.id)}
              className="text-red-500 hover:underline"
            >
              Remove
            </button>
          </div>
        ))
      )}
      <button onClick={onClose} className="mt-4 bg-gray-300 px-4 py-2 rounded">Close</button>
    </div>
  </div>
);

export default CartModal;