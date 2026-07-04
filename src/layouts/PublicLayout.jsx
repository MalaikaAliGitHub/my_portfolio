import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function PublicLayout() {
  return (
    <div>

      <Navbar />

      <div className="p-6">
        <Outlet />
      </div>

    </div>
  );
}

export default PublicLayout;