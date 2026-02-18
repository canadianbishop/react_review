import { useStoreCart } from '../store/cartStore.js'
import {products} from './produsts.js'

const ProductsList = () => {
  const addItem = useStoreCart((state) => state.addItem);

  return (
    <div>
   <h1 className='text-2xl'>available items</h1>

   {
      products.map(product => (
            <div key={product.id} >
                  {product.name}
                  <button className='ml-4'  onClick={()=> addItem(product)}>add to cart</button>
            </div>
      ))
   }
    
    </div>
  )
}

export default ProductsList