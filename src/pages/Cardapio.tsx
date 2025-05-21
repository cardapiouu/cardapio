import { useEffect, useRef, useState } from "react";
import bebidasImage from "../assets/bebidas.webp";
import docesImage from "../assets/doces.jpg";
import hamburgImage from "../assets/hamburg.jpg";
import pizzaImage from "../assets/pizza.webp";
import xisImage from "../assets/xis.jpg";
import { CategoryHeader } from "../components/CategoryHeader";
import { ProductSection } from "../components/ProductSection";

export const Cardapio = () => {
  const [focusedCategory, setFocusedCategory] = useState("");

  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const enterpriseCategories = [
    { name: "hamburgeres", image: hamburgImage },
    { name: "pizza", image: pizzaImage },
    { name: "xis", image: xisImage },
    { name: "doces", image: docesImage },
    { name: "bebidas", image: bebidasImage },
  ];
  const enterpriseFoods = [
    {
      name: "Smash Burger",
      description:
        "smash burger com queijo cheddar, carne 300g, bacon e molho especial",
      price: 29.9,
      imageUrl: hamburgImage,
      category: "hamburgeres",
    },
    {
      name: "Pizza 30cm",
      description:
        "pizza 30cm com diversos sabores disponíveis, selecione até 4 sabores",
      price: 59.8,
      imageUrl: pizzaImage,
      category: "pizza",
    },
    {
      name: "Pizza 40cm",
      description:
        "pizza 40cm com diversos sabores disponíveis, selecione até 4 sabores",
      price: 59.8,
      imageUrl: pizzaImage,
      category: "pizza",
    },
    {
      name: "Xis pneu",
      description:
        "Xis extra grande com carne 400g, queijo cheddar, bacon e molho especial",
      price: 80,
      imageUrl: xisImage,
      category: "xis",
    },
    {
      name: "Bolo",
      description: "Bolo de chocolate com cobertura de chocolate e granulado",
      price: 20,
      imageUrl: docesImage,
      category: "doces",
    },
    {
      name: "Refrigerante",
      description: "Bebidas em lata de 350ml, consulte os sabores disponíveis",
      price: 8,
      imageUrl: bebidasImage,
      category: "bebidas",
    },
    {
      name: "Água",
      description: "Água mineral em garrafa de 500ml",
      price: 6,
      imageUrl: bebidasImage,
      category: "bebidas",
    },
  ];

  useEffect(() => {
    if (focusedCategory && sectionRefs.current[focusedCategory]) {
      sectionRefs.current[focusedCategory]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [focusedCategory]);

  return (
    <div className="flex flex-col w-full bg-white">
      <CategoryHeader
        category={enterpriseCategories}
        focused={focusedCategory}
        setFocused={setFocusedCategory}
        type="icon"
      />

      <div className="flex flex-col">
        <ProductSection
          sectionTitle="Pizzas"
          ref={(e: any) => (sectionRefs.current["pizza"] = e)}
          sectionDescription="Pizzas de 20cm, 30cm e 40cm, com diversos sabores disponíveis, consulte as opções"
          products={enterpriseFoods.filter((item) => item.category === "pizza")}
        />
        <ProductSection
          sectionTitle="Hamburgueres"
          ref={(e: any) => (sectionRefs.current["hamburgeres"] = e)}
          sectionDescription="Hamburgueres com carne de 300g, 400g e 600g, queijo cheddar, bacon e molho especial"
          products={enterpriseFoods.filter(
            (item) => item.category === "hamburgeres"
          )}
        />
        <ProductSection
          sectionTitle="Xis"
          ref={(e: any) => (sectionRefs.current["xis"] = e)}
          sectionDescription="Xis com carne de 300g, 400g e 600g, queijo cheddar, bacon e molho especial"
          products={enterpriseFoods.filter((item) => item.category === "xis")}
        />
        <ProductSection
          sectionTitle="Doces"
          ref={(e: any) => (sectionRefs.current["doces"] = e)}
          sectionDescription="Nossos doces são feitos com ingredientes frescos e de qualidade"
          products={enterpriseFoods.filter((item) => item.category === "doces")}
        />
        <ProductSection
          sectionTitle="Bebidas"
          ref={(e: any) => (sectionRefs.current["bebidas"] = e)}
          sectionDescription="Bebidas em lata de 350ml e 500ml, consulte os sabores disponíveis"
          products={enterpriseFoods.filter(
            (item) => item.category === "bebidas"
          )}
        />
      </div>
    </div>
  );
};
