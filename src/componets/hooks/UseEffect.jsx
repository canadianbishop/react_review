import { useEffect } from "react";
import { useState } from "react";

const UseEffect = () => {
      const [users, setValue] = useState([])
       
      useEffect(()=>{
        const fetchUsers = async ()=>{
           try {
              const res = await fetch('https://jsonplaceholder.typicode.com/users');
              if(!res.ok){
                throw new Error('invalid request')
              }
      
              const data = await res.json();
      
              console.log(data);
      
              setValue(data)
      
           } catch (error) {
             if(error instanceof Error){ console.log(error.message)
             return;}
             else{
              console.log(error)
             }
           }
        };
      
        fetchUsers();
      
      },[] )
      
        
      const delUser = ()=>{
        
      setValue(prev => prev.slice(0,-1))
      }
  return (
    <div>
      {
       users?.map(({name, id})=>(
        <li key={id}>{name}</li>
       ))
      }
     <button onClick={delUser}>clid</button>
      <h1>fuck me</h1>
    </div>
  )
}

export default UseEffect