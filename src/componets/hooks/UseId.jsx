import { useId } from "react";


const UseIdX = () => {
      const id = useId();
  return (
    <div>

      <div>
            <label htmlFor={`${id}-email`}>email</label>
            <input type="email"  id={`${id}-email`}/>
      </div>
      <div>
            <label htmlFor={`${id}-password`}>email</label>
            <input type="email"  id={`${id}-password`}/>
      </div>

    </div>
  )
}

export default UseIdX