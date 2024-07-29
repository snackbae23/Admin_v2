import { Outlet, Link } from "react-router-dom";

//component
import Navbar from "../component/Navbar";
import AdminConsole from "./AdminConsole";

const Layout = () => {
  return (
    <div className="w-full h-fit">
      <Navbar/>
      <AdminConsole />
      <Outlet />
    </div>
  )
};

export default Layout;