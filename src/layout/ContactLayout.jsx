import { Outlet } from "react-router-dom"
import ContactPage from "../pages/ContactPage"

const ContactLayout = () => {
  return (
    <div>
      <ContactPage/>
      <Outlet/>
    </div>
  )
}

export default ContactLayout