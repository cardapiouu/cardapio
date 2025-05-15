import { useState } from "react";
import { CategoryHeader } from "../components/CategoryHeader";

export const Cardapio = () => {
  const [focusedCategory, setFocusedCategory] = useState("");

  const enterpriseCategories = [
    { name: "Hamburgeres" },
    { name: "Pizza" },
    { name: "Xis" },
    { name: "Doces" },
    { name: "Bebidas" },
  ];
  const enterpriseFoods = [{}, {}];

  return (
    <div className="flex flex-col w-full overflow-y-auto">
      <CategoryHeader
        category={enterpriseCategories}
        focused={focusedCategory}
        setFocused={setFocusedCategory}
      />

      <section className="min-h-[100vh] bg-gray-200"></section>
    </div>
  );
};
