import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Layout
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

// Layout component
const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* Ovde se renderuje trenutno aktivna ruta */}
      </main>
      <Footer />
    </>
  );
};

// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/projects", element: <Projects /> },
      { path: "/contact", element: <Contact /> },
      { path: "*", element: <NotFound /> }, // fallback route
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
