import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

import Login from "./admin/Login";
import Dashboard from "./admin/Dashboard";
import ManageProjects from "./admin/ManageProjects";

import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";

import AdminRoute from "./routes/AdminRoute";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* =========================
            PUBLIC ROUTES
        ========================== */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* =========================
            LOGIN (NO PROTECTION)
        ========================== */}
        <Route path="/login" element={<Login />} />

        {/* =========================
            ADMIN PROTECTED ROUTES
        ========================== */}
        <Route
          element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }
        >

          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/projects" element={<ManageProjects />} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;