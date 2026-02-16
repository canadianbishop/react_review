import { useCartStore } from "../store/cartStore";

const Cart = () => {

      const {cart,  removeFromCart, clearCart} = useCartStore(state => ({
            cart: state.cart,
            removeFromCart:state.removeFromCart,
            clearCart: state.clearCart
      }))
  
    

      const items = cart.length === 1 ? 'item' : 'items';
  
      return (

            
     <div>
      <h1>cart items</h1>

      <ul>
     <h1>you have {cart.length} {items} in your cart</h1>

      {cart.map(({ id, name }) => (
        <li key={id}>
          {name}
          <button onClick={() => removeFromCart(id)}>delete</button>
        </li>
      ))}
    </ul>

    {cart.length > 0 && <button onClick={clearCart}>clear cart</button>}


     </div>
  );
};

export default Cart;
