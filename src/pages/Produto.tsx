import { ArrowLeft, Minus, Plus } from "lucide-react";
import pizzaImage from "../assets/pizza.webp";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LiItem = ({ sabor }: { sabor: string }) => {
  const [amount, setAmount] = useState(0);

  const addAmount = () => {
    setAmount((prev) => {
      switch (prev) {
        case 5:
          return prev;
        default:
          return prev + 1;
      }
    });
  };
  const decAmount = () => {
    setAmount((prev) => {
      switch (prev) {
        case 0:
          return prev;
        default:
          return prev - 1;
      }
    });
  };

  return (
    <li className="flex justify-between font-inter py-4 border-b border-gray-300 last:border-none last:pb-2 first:pt-2">
      {sabor}

      <div className="flex items-center gap-2">
        <Plus
          onClick={addAmount}
          size={26}
          className="bg-white rounded-full p-1"
        />
        <p className="w-2">{amount}</p>
        <Minus
          onClick={decAmount}
          size={26}
          className="bg-white rounded-full p-1"
        />
      </div>
    </li>
  );
};

export const Produto = () => {
  const navigate = useNavigate();

  const sabores = ["Marguerita", "Calabresa", "Portuguesa"];
  return (
    <div className="flex flex-col h-full w-full gap-4">
      <div className="w-full h-64 relative rounded-b-2xl overflow-hidden">
        <div className="absolute top-0 w-full h-full bg-gradient-to-b from-transparent via-transparent via-40% to-[#000000]" />
        <img src={pizzaImage} alt="" className="w-full h-full" />

        <p className="flex gap-3 absolute items-center bottom-4 left-4 text-xl font-bold font-inter text-white">
          <ArrowLeft
            size={24}
            onClick={() => navigate(-1)}
            className="cursor-pointer"
          />
          Pizza 30cm
        </p>
      </div>

      <div className="flex flex-col gap-4 w-full px-6">
        <p className="text-sm font-inter text-center text-neutral-600">
          Pizza 30cm com diversos sabores disponíveis, selecione até 4 sabores
        </p>
        <p className="font-inter font-semibold text-neutral-600">Opções</p>
      </div>

      <ul className="py-2 px-6 bg-gray-200">
        {sabores.map((item, i) => (
          <LiItem sabor={item} key={i} />
        ))}
      </ul>
    </div>
  );
};
