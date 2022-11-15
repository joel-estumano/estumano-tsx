import { Outlet, Route, Routes } from "react-router-dom";
import { Navbar } from "./index/components/navbar/Navbar";
import { Articles } from "./index/modules/articles/Articles";

function Dashboard() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="/articles" element={<Articles />} />
      </Route>
    </Routes>
  );
}