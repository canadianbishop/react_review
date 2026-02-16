import { useState } from "react";
import ProductsList from "./ProductsList";
import { products } from "./produsts";
import Cart from "./Cart";

const Shop = () => {

      const [users, setUsers]= useState([{name: }])

  return (
    <div>
      <ProductsList products={products} />
      <Cart/>
    </div>
  );
};

export default Shop;
