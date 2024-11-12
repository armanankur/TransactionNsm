import Cards from "./Card";
import { Button } from "../../../@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../@/components/ui/accordion";
import { useState } from "react";
import Bitcoin from "../../assets/btc.png";
import Ethereum from "../../assets/eth.png";
import Xcm from "../../assets/xcm.png";
import Euro from "../../assets/euro.png";
import { Moon, Sun } from "lucide-react";
const LatestTransaction = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isModeButton, setModeButton] = useState(false);
  const cryptoCoins = [
    {
      imageSrc: Ethereum,
      name: "ETH",
    },
    {
      imageSrc: Bitcoin,
      name: "BTC",
    },

    {
      imageSrc: Euro,
      name: "Euro",
    },
    {
      imageSrc: Xcm,
      name: "Xcm",
    },
  ];

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  const handleToggle = () => {
    setModeButton(!isModeButton);
  };

  const handleClick = () => {
    toggleTheme();
    handleToggle();
  };
  return (
    <>
      <Accordion
        type="single"
        collapsible
        className={`${
          isDarkMode ? "bg-neutral-950 text-slate-50" : "bg-white text-gray-950 "
        } px-5 py-5`}
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-3xl mx-2 my-2 px-2 py-2  font-bold hover:no-underline  w-full">
            Latest transactions
          </AccordionTrigger>
          <AccordionContent
            className={`${
              isDarkMode ? "bg-neutral-950 text-slate-50 " : "bg-white text-gray-950"
            } p-4 `}
          >
            <div className="flex flex-col space-y-2 ">
              <div className="flex justify-between ">
                <p className="text-sky-400 text-2xl ">30 Oct 2024</p>
                <div onClick={handleToggle}>
                  <Button
                    variant="outline"
                    onClick={handleClick}
                    className={`${
                      isDarkMode
                        ? "bg-neutral-950 text-slate-50  border-gray-200 border-2"
                        : "bg-white text-gray-950"
                    } rounded-xl`}
                  >
                    {isModeButton ? <Sun /> : <Moon />}
                  </Button>
                </div>
              </div>

              {cryptoCoins.map((coinDetails, index) => {
                return (
                  <div key={index} className="">
                    <Cards
                      imageSrc={coinDetails.imageSrc}
                      name={coinDetails.name}
                      isDarkMode={isDarkMode}
                    />
                  </div>
                );
              })}

              <div className="flex justify-center">
                <Button
                  variant="outline"
                  className={`${
                    isDarkMode
                      ? "bg-black text-slate-50 "
                      : "bg-white text-gray-950 hover:bg-slate-100"
                  } flex justify-center items-center  rounded-xl   mt-5 `}
                >
                  See More
                  <span className="px-2 ">
                    <ArrowRight />
                  </span>
                </Button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};
export default LatestTransaction;
