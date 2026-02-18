import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../comps/Navbar";


const RootLayout = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Navbar />
      {navigation.state=== 'loading' && <p>loading...</p>}
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
