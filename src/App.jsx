import "./app.css";
import HomePage from "./pages/HomePage";
import { Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import RootLayout from "./layout/RootLayout";
import ContactLayout from "./layout/ContactLayout";
import ContactInfo from "./comps/ContactInfo";
import ContactForm from "./comps/ContactForm";
import NotFound from "./comps/NotFound";
import JobsLayout from "./layout/JobsLayout";
import Jobs, { jobsLoader } from "./pages/Jobs";
import JobDetails, { detailLoader } from "./comps/JobDetails";
import Error from "./comps/Error";


const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}> 
        <Route index  element={<HomePage/>}/>
        <Route path="products"  element={<ProductPage/>}/>
        <Route path="about"  element={<AboutPage/>}/>
        <Route path="contact"  element={<ContactPage/>}/>
        <Route path="contact"  element={<ContactLayout/>}>
        <Route path="info"  element={<ContactInfo/>}/>
        <Route path="form"  element={<ContactForm/>}/>
        </Route >

        <Route path="jobs" element={<JobsLayout/>}>
           <Route  index element={<Jobs/>} loader={jobsLoader} />
           <Route path=":id"  element={<JobDetails/>}  loader ={detailLoader} errorElement={<Error/>}/>
        </Route>

        <Route path="*" element={<NotFound/>}/>
      </Route>
    )
  )
  return (

    <RouterProvider router={router}/>
    // <div>
    //   <Navbar/>
    //   <div className="container">
    //   <Routes>
    //     <Route path="/"  element={<HomePage/>}/>
    //     <Route path="/products"  element={<ProductPage/>}/>
    //     <Route path="/about"  element={<AboutPage/>}/>
    //     <Route path="/contact"  element={<ContactPage/>}/>
    //   </Routes>
    //   </div>
    // </div>
  );
};

export default App;
