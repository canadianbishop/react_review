import { useContext } from "react";
import { UserContext } from "./context";
import { useState } from "react";

const Login = () => {
  const { login, user, logout } = useContext(UserContext);
  const [username , setUsername] = useState('');

  function handleSubmit(e){
      e.preventDefault();
     if(!username.trim()){
        alert('enter username');
        return;
     }

     login(username);

     setUsername('');
  }
  return (
    <div>
      {user.name ? <h1>welcome User: {user.name}</h1> : <h1>please login</h1>}

      <form onSubmit={handleSubmit}>
        <input type="text"  placeholder="enter username to login" 
         onChange={(e)=> setUsername(e.target.value)}
         value={username} />
         <button  type="submit">login</button>
      </form>

      <button onClick={()=> logout()}>logout</button>
    </div>
  );
};

export default Login;
