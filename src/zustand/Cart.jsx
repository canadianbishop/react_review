import { useStoreCart } from "../store/cartStore";

const Cart = () => {
  const cart = useStoreCart((state) => state.cart);
  const removeItem = useStoreCart((state) => state.deleteItem);
  const cartCount = useStoreCart((state) => state.cart.length);

  const item = cartCount <= 1 ? "item" : "items";

  return (
    <div>
      <h1>you have {cartCount} {item} in your cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => removeItem(item.id)}>remove item</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
