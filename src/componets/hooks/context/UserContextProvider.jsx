import { useState } from "react"
import { UserContext } from "./context.js"


const UserContextProvider = ({children}) => {
    const [user, setUser] = useState({
      name: '',
      isLoggedIn: false
    })

function login(username){
      if(user){
          setUser({name:username, isLoggedIn: true})
      } 
};

function logout(){
      setUser({
            name: '',
            isLoggedIn: false
      })
}

  return (
    <UserContext.Provider value={{user, login, logout}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider