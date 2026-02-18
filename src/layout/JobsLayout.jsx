import { Outlet } from "react-router-dom";

const JobsLayout = ()=>{

      return (
        <div>
            <h1>job openings</h1>
            <p>this are the list of current job openings in our company</p>
            <Outlet/>
        </div>
      )
}


export default JobsLayout;