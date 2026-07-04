import { Outlet, Link, useNavigate } from "react-router-dom";

function AdminLayout() {
  const navigate = useNavigate();
   
  const handleLogout = () => {
  localStorage.removeItem("token");
  navigate("/login");
};

  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* TOP BAR */}
      <div className="flex justify-between items-center p-4 border-b border-gray-800">

        <h1 className="text-cyan-400 font-bold text-xl">
          Admin Panel
        </h1>

        {/* LOGOUT BUTTON */}
        <button
          onClick={handleLogout}
          className="bg-red-500 px-4 py-2 rounded"
        >
          Logout
        </button>

      </div>

      {/* PAGE CONTENT */}
      <div className="p-6">
        <Outlet />
      </div>

    </div>
  );
}

export default AdminLayout;