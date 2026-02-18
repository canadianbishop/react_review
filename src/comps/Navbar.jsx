import { NavLink, useNavigate } from "react-router-dom"
const Navbar = () => {

      const navigate = useNavigate()

  return (
    <div className="navbar">
      <h2>Cana_Bish</h2>
      <ul >
           <NavLink to={'/'}><li>Home</li></NavLink> 
           <NavLink to={'/about'}><li>About</li></NavLink> 
           <NavLink to={'/contact'}><li>Contact</li></NavLink> 
           <NavLink to={'/products'}><li>Product</li></NavLink>      
           <NavLink to={'/jobs'}><li>jobs</li></NavLink>      
      </ul>
      <button onClick={()=> navigate('/about', {replace:true})}>Get Started</button>
    </div>
  )
}

export default Navbar