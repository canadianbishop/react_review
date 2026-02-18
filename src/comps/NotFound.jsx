import { useNavigate } from "react-router-dom"

const NotFound = () => {
      const navigate= useNavigate()
  return (
    <div>
      <h2>404 | page not found</h2>
      <br />
      <button onClick={()=>navigate('/')}>go to homepage</button>
    </div>
  )
}

export default NotFound