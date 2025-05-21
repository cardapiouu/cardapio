import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";

export const Layout = () => {
  return (
    <div className="flex flex-col relative min-h-screen w-screen antialiased">
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
