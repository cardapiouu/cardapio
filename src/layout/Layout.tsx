import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export const Layout = () => {
  return (
    <div className="flex relative w-[100%] h-[100%] overflow-hidden">
      <Header />

      <div className="h-[100vh] w-full overflow-hidden antialiased relative">
        <Outlet />
      </div>
    </div>
  );
};
