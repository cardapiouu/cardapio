import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";

export const Layout = () => {
  return (
    <div className="flex flex-col relative max-h-screen w-screen antialiased ">
      <main className="h-screen w-full">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
