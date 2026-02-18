import { useNavigate, useRouteError } from "react-router-dom"

const Error = () => {
      const error = useRouteError()
      const Navigate = useNavigate()
  return (
    <div>
      <h1>an error occured</h1>
      <p>{error.message}</p>
       <button onClick={()=> Navigate('/')}>go to homepage</button>
    </div>
  )
}

export default Error