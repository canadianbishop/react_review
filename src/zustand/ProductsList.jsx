import { useCartStore } from "../store/cartStore"

const ProductsList = ({products}) => {

      

      const {addToCart} = useCartStore(state => state.addToCart); 

  return (
    <div>
      {
            products.map((product) => (
                  <div key={product.id} className="mb-3">
                       <h2>{product.name}</h2>
                       <p>{product.description}</p>
                       <button onClick={()=> addToCart(product)}>add to cart</button>
                  </div>

            ))
      }
    </div>
  )
}

export default ProductsList