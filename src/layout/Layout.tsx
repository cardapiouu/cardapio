import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";

export const Layout = () => {
  return (
    <div className="flex flex-col relative w-[100%] h-[100%] overflow-hidden antialiased">
      <div className="h-[91vh] w-full overflow-hidden antialiased relative">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};
