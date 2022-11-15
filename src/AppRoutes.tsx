import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Footer } from "./index/components/footer/Footer";
import { Navbar } from "./index/components/navbar/Navbar";
import { Articles } from "./index/modules/articles/Articles";
import { NotFound } from "./not-found/NotFound";

function Dashboard() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/articles" element={<Articles />} />
        </Route>
        <Route path="*" element={<NotFound />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}