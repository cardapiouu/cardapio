import { CakeSlice, GlassWater, Hamburger, Pizza } from "lucide-react";
import type { JSX } from "react";
import { tv } from "tailwind-variants";

const buttonStyle = tv({
  base: "flex flex-col items-center justify-center px-4 min-w-22 h-16 rounded-md overflow-hidden flex-shrink-0 gap-2 cursor-pointer transition-all duration-300",
  variants: {
    actual: {
      true: "text-white bg-primary",
      false: "bg-gray-200 text-primary cursor-pointer",
    },
  },
});

interface CategoryHeaderProps {
  category: { name: string }[];
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
    <section className="flex items-center h-[12vh] w-full bg-white gap-4 overflow-x-auto whitespace-nowrap px-4">
      {category.map((item) => (
        <button
          className={buttonStyle({ actual: item.name === focused })}
          onClick={() => setFocused(item.name)}
        >
          <HandleIcon name={item.name} />
          <p className="text-sm font-semibold">{item.name}</p>
        </button>
      ))}
    </section>
  );
};
