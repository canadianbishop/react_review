import axios from 'axios';
import './Styles.css';
import { useState, useEffect } from "react";

const Meals = () => {
  const [items, setItems] = useState([]);

  useEffect(()=>{
    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
    .then(res =>(setItems(res.data.meals)))
    .catch(err => console.log(err))
  },[])
     

  const itemsList = items.map(({strMeal, strMealThumb, idMeal}) => (
       <section className='card'>
        <img src={strMealThumb} alt="pic" />
        <section className="content">
          <p>{strMeal}</p>
          <p>#{idMeal}</p>
        </section>
       </section>
  ))
  return (
    <div className="items-container">
      <h1>meals api</h1>
      {itemsList}
    </div>
  )
}

export default Meals