import { useState } from "react";
import { useReducer } from "react";

const initialState = {
      username: '',
      password: '',
      loggedIn: false
}


function reducer(user, {type, payload}){
      switch(type){
            case 'login': 
            return {
                  ...user,
                   username:payload.username,
                   password: payload.password,
                   loggedIn: true
            };

            case 'logout' :
                  return{
                        username: '',
                        password: '',
                        loggedIn: false
                  }

                  default : 
                  return user
      }
}

const SignIn = () => {
   const [user, dispatch] = useReducer(reducer, initialState);
   const [userInputs , setUserInputs]  = useState({
      username: '',
      pasword: ''
   })


   function handleSubmit(e){
       e.preventDefault();
      
       if(!userInputs.username.trim() ||  !userInputs.passord.trim()){
          alert('both fields must be filled');
          return
       };

       dispatch({type: 'login', payload: userInputs});
       setUserInputs({
            username: '',
            password : ''
       })

   }


      
  return <div>
      {user.username ? <h1>welcome user: {user.username}</h1> : <h1>please  login</h1>}

      <form  onSubmit={handleSubmit}>
            <input type="text" 
             name="username"  
             placeholder="username"
             value={userInputs.username} 
            onChange={(e)=> setUserInputs(prev => ({...prev, username: e.target.value})) } />

             <input type="text" 
             name="password"  
             placeholder="password"
             value={userInputs.password} 
            onChange={(e)=> setUserInputs(prev => ({...prev, passord: e.target.value})) } />

            <button type="submit">submit</button>
      </form>

         <button onClick={()=> dispatch({type:'logout'})}>logout</button>
  </div>;
};

export default SignIn;
