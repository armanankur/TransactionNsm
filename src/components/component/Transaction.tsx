import Cards from "../component/Card";
import { Button } from "../../../@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../@/components/ui/accordion";
import Bitcoin from "../../assets/btc.png";
import Ethereum from "../../assets/eth.png";
import Xcm from "../../assets/xcm.png";
import Euro from "../../assets/euro.png";

const LatestTransaction = () => {
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
  return (
    <>
      <Accordion type="single" collapsible className=" px-5 py-5">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-3xl mx-2 my-2 px-2 py-2  font-bold hover:no-underline text-slate-600 w-full">
            Latest transactions
          </AccordionTrigger>
          <AccordionContent className="p-4 ">
            <div className="flex flex-col space-y-2 ">
              <p className="text-sky-400 text-2xl ">30 Oct 2024</p>

              {cryptoCoins.map((coinDetails, index) => {
                return (
                  <div key={index} className="">
                    <Cards
                      imageSrc={coinDetails.imageSrc}
                      name={coinDetails.name}
                    />
                  </div>
                );
              })}

              <div className="flex justify-center">
                <Button
                  variant="outline"
                  className="flex justify-center items-center  rounded-xl hover:bg-gray-100  mt-5 "
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
