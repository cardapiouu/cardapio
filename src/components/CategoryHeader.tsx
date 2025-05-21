import { CakeSlice, GlassWater, Hamburger, Pizza } from "lucide-react";
import type { JSX } from "react";
import { tv } from "tailwind-variants";

const buttonStyle = tv({
  base: "flex flex-col items-center justify-center px-4 min-w-22 h-20 rounded-md overflow-hidden flex-shrink-0 gap-2 cursor-pointer transition-all duration-300",
  variants: {
    actual: {
      true: "text-white bg-primary",
      false: "bg-white text-primary cursor-pointer",
    },
  },
});

interface CategoryHeaderProps {
  category: { name: string; image: string }[];
  type: "image" | "icon";
  focused: string;
  setFocused: (a: string) => void;
}

interface HandleIconProps {
  name: string;
}

export const CategoryHeader = ({
  category,
  focused,
  setFocused,
  type,
}: CategoryHeaderProps) => {
  const HandleIcon = ({ name }: HandleIconProps) => {
    const iconMap: Record<string, JSX.Element> = {
      Bebidas: <GlassWater />,
      Hamburgeres: <Hamburger />,
      Pizza: <Pizza />,
      Doces: <CakeSlice />,
    };
    return iconMap[name] ?? <GlassWater />;
  };

  return (
    <section className="flex items-center h-24 w-full bg-gray-200 gap-4 overflow-x-scroll whitespace-nowrap px-4">
      {category.map((item) =>
        type === "icon" ? (
          <button
            key={item.name}
            className={buttonStyle({ actual: item.name === focused })}
            onClick={() => setFocused(item.name)}
          >
            <HandleIcon name={item.name} />
            <p className="text-sm font-semibold capitalize">{item.name}</p>
          </button>
        ) : (
          <button
            key={item.name}
            className="flex items-center justify-center relative min-w-22 w-fit overflow-hidden px-4 h-20 flex-shrink-0 rounded-md bg-black cursor-pointer transition-all duration-300"
            onClick={() => setFocused(item.name)}
          >
            <img
              src={item.image}
              className="absolute top-0 z-20 w-full h-full object-cover opacity-65"
            />
            <p className="text-sm z-40 text-white font-bold text-shadow-lg/40">
              {item.name}
            </p>
          </button>
        )
      )}
    </section>
  );
};
