import {
  ClipboardList,
  ShoppingBasket,
  UserRound,
  Utensils,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { tv } from "tailwind-variants";

const iconsStyle = tv({
  base: "hover:text-white flex items-center justify-center w-full h-[25%] border-r border-white transition-all duration-200",
  variants: {
    selected: {
      true: "text-white",
      false: "text-neutral-200/80",
    },
  },
});

export const Footer = () => {
  const [actualPath, setActualPath] = useState("cardapio");
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setActualPath(pathname.replace("/", ""));
  }, [pathname]);

  return (
    <div className="grid grid-cols-4 items-center w-full h-[9vh] bg-primary rounded-t-xl shadow-[0px_-4px_16px_-3px_rgba(0,0,0,0.45)]">
      <div
        onClick={() => navigate("/cardapio")}
        className="flex items-center w-full h-full cursor-pointer"
      >
        <button className={iconsStyle({ selected: actualPath === "cardapio" })}>
          <Utensils size={25} />
        </button>
      </div>
      <div
        onClick={() => navigate("/pedidos")}
        className="flex items-center w-full h-full cursor-pointer"
      >
        <button className={iconsStyle({ selected: actualPath === "pedidos" })}>
          <ClipboardList size={25} />
        </button>
      </div>
      <div
        onClick={() => navigate("/compras")}
        className="flex items-center w-full h-full cursor-pointer"
      >
        <button className={iconsStyle({ selected: actualPath === "compras" })}>
          <ShoppingBasket size={25} />
        </button>
      </div>

      <div
        onClick={() => navigate("/usuario")}
        className="flex items-center w-full h-full cursor-pointer"
      >
        <button
          className={iconsStyle({
            selected: actualPath === "usuario",
            className: "border-none",
          })}
        >
          <UserRound size={25} />
        </button>
      </div>
    </div>
  );
};
