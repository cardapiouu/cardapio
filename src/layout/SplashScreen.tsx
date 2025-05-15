import { motion, useAnimation } from "motion/react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Pattern from "../assets/images/pattern.svg";
import { CleanLoading } from "../components/CleanLoading";
import { postEstablishmentData } from "../services/EstablishmentData";

export const SplashScreen = () => {
  const [animatedEnd, setAnimatedEnd] = useState(false);

  const navigate = useNavigate();

  const query = new URLSearchParams(useLocation().search);
  const establishment = query.get("establishment") ?? "";
  const table = query.get("establishment") ?? "";
  //http://localhost:5173/?establishment=value&table=4

  const controls1 = useAnimation();
  const controls2 = useAnimation();

  const EstablishmentData = async () => {
    if (establishment && table) {
      const data = await postEstablishmentData({
        EstablishmentName: establishment,
        clientTable: table,
      });

      console.log(data);
    }
  };

  useEffect(() => {
    EstablishmentData();
  }, []);

  useEffect(() => {
    setAnimatedEnd(false);

    const animateSequence = async () => {
      await controls1.start({
        y: 0,
        opacity: 1,
        transition: { duration: 1, delay: 3, ease: "easeInOut" },
      });
      await controls1.start({
        y: -60,
        opacity: 0,
        transition: { duration: 1, delay: 2, ease: "easeInOut" },
      });

      await new Promise((r) => setTimeout(r, 200));

      await controls2.start({
        y: 0,
        opacity: 1,
        transition: { duration: 1, ease: "easeInOut" },
      });

      await new Promise((r) => setTimeout(r, 100));

      setAnimatedEnd(true);
    };

    {
      establishment && table && animateSequence();
    }
  }, []);

  useEffect(() => {
    if (animatedEnd === true) {
      navigate(`/cardapio?establishment=${establishment}&table=${table}`);
    }
  }, [animatedEnd]);

  return (
    <div className="flex flex-col items-center justify-center relative w-full h-screen p-8 bg-linear-to-b from-[#042B3D]/95 via-primary/70 to-[#06364d]/95">
      <img src={Pattern} className="absolute top-0 left-0 h-full w-full" />

      {establishment && table ? (
        <div className="flex relative flex-col w-full items-center justify-center z-20">
          <motion.p
            className="text-white font-semibold font-montserrat text-2xl text-center text-nowrap absolute left-1/2 bottom-1/2 -translate-x-1/2"
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: -60, opacity: 0 }}
            transition={{ duration: 1, delay: 2, ease: "easeInOut" }}
          >
            Seja bem vindo!
          </motion.p>
          <motion.p
            className="text-white font-semibold font-montserrat text-2xl text-center text-nowrap absolute left-1/2 bottom-1/2 -translate-x-1/2"
            initial={{ y: 40, opacity: 0 }}
            animate={controls1}
          >
            Limpando sua mesa...
          </motion.p>
          <motion.p
            className="text-white font-semibold font-montserrat text-2xl text-center text-nowrap absolute left-1/2 bottom-1/2 -translate-x-1/2"
            initial={{ y: 40, opacity: 0 }}
            animate={controls2}
          >
            Quase limpo...
          </motion.p>

          <div className="flex flex-col mt-20">
            <CleanLoading />
          </div>
        </div>
      ) : (
        <div className="flex flex-col text-center gap-4 text-white z-20">
          <p className="text-2xl font-bold font-montserrat">
            Mesa não encontrada
          </p>
          <p className="font-semibold font-inter">
            Por favor tente ler seu QRCode novamente, ou busque a ajuda de um
            responsável.
          </p>
        </div>
      )}
    </div>
  );
};
