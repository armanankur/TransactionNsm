import { useState } from "react";
import { Card, CardContent } from "../../../@/components/ui/card";
import { Button } from "../../../@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogPortal,
  DialogOverlay,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from "../../../@/components/ui/dialog";
import { CircleArrowOutDownRight } from "lucide-react";

type CardProps = {
  name: string;
  imageSrc: string;
  isDarkMode: boolean;
};

const Cards: React.FC<CardProps> = ({ name, imageSrc, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle modal

  const toggleDialog = () => setIsOpen(!isOpen);

  return (
    <div>
      <Card
        className={`${
          isDarkMode ? "bg-neutral-950 text-slate-50" : "bg-white text-gray-950 "
        }w-full shadow-lg  p-1  cursor-pointer  `}
        onClick={toggleDialog}
      >
        <CardContent
          className={`${
            isDarkMode ? "bg-black  text-slate-50" : "bg-white hover:bg-slate-50 text-blue-950 "
          } flex justify-between items-center flex-wrap gap-2  p-2  w-full `}
        >
          {/* bg-red-400 */}
          <div className="flex justify-between w-fit items-center  flex-wrap py-2">
            {/* bg-slate-600  */}
            {/* Left Icon Section */}
            <div className="flex-shrink-0 p-1 bg-gray-100 rounded-full">
              <CircleArrowOutDownRight className="text-green-600 size-6 " />
            </div>

            {/* Center Info Section */}
            <div
              className={`${
                isDarkMode ? "bg-black text-slate-50" : "bg-white text-gray-950"
              } flex flex-col justify-center items-start text-left m-1 p-1`}
            >
              <div className="flex  justify-centeritems-center space-x-2 text-lg font-sans">
                <span>Received</span>
                <span
                  className={`${
                    isDarkMode
                      ? "bg-white text-slate-900"
                      : " bg-gray-200 text-gray-950"
                  }   w-fit text-right items-center flex justify-around item-center rounded-xl`}
                >
                  <img
                    src={imageSrc}
                    alt="coins_image"
                    className="w-5 h-5 rounded-xl"
                  ></img>
                  <small className="text-right font-semibold">{name}</small>
                </span>
              </div>
              <p className=" text-sm">11:25 AM</p>
            </div>
          </div>
          {/* Right Amount Section */}
          <div className=" px-1 py-3 mx-0 flex justify-center flex-col items-center flex-wrap w-fit ">
            {/* bg-yellow-300 */}
            <p className=" font-bold flex-wrap text-green-500">10,000 {name}</p>
            <p className="text-gray-400 ">107.00 USD</p>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogPortal>
          <DialogOverlay className="fixed inset-0 bg-black/50 backdrop-blur-sm " />
          <DialogContent
            className={`${
              isDarkMode ? "bg-neutral-950 text-slate-50" : "bg-white text-gray-950"
            }fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  rounded-xl shadow-xl lg:w-full max-w-lg [&>button]:hidden sm:vh-screen sm:w-3/4`}
          >
            <DialogHeader
              className={`${
                isDarkMode ? "bg-neutral-950  text-slate-50" : "bg-white text-gray-950"
              } px-6 py-4 border-b`}
            >
              <div className="flex items-center justify-between">
                <DialogTitle className="text-xl font-semibold">
                  Deposit
                </DialogTitle>
                <div className=" border-gray-100 border-2 py-1 rounded-xl w-16 flex items-center justify-around">
                  <img
                    src={imageSrc}
                    alt={`${name} icon`}
                    className="w-5 h-7 "
                  />
                  <small className="font-semibold">{name}</small>
                </div>
              </div>
            </DialogHeader>

            <div
              className={`${
                isDarkMode
                  ? "bg-neutral-950 text-slate-50 "
                  : "bg-white text-gray-950"
              } p-8 space-y-5 `}
            >
              <div className="flex justify-between items-center rounded-xl p-6 shadow-md">
                <div className="flex-shrink-0 p-1 bg-gray-200 rounded-full">
                  <CircleArrowOutDownRight className="text-green-600 h-6 w-6" />
                </div>
                <div className="text-right">
                  <p className="text-2xl font-semibold text-green-500">
                    10,000.00 {name}
                  </p>
                </div>
              </div>

              <div className="space-y-4 divide-y">
                <div className="flex justify-between items-center py-3">
                  <p className="font-bold">Amount</p>
                  <p className="text-sm font-medium ">1000 {name}</p>
                </div>

                <div className="flex justify-between items-center py-3">
                  <p className="font-bold">Current Equiv Amount</p>
                  <p className="text-sm font-medium ">407.31 USD</p>
                </div>

                <div className="flex justify-between items-center py-3">
                  <p className="font-bold">Date</p>
                  <p className="text-sm font-medium ">
                    October 30, 2024 at 11:25
                  </p>
                </div>

                <div className="flex justify-between items-center py-3">
                  <p className="font-bold">Note</p>
                  <p className="text-sm font-medium ">Demo Deposit</p>
                </div>
              </div>
            </div>

            <DialogFooter
              className={`${
                isDarkMode
                  ? "bg-neutral-950 text-slate-50  hover:text-gray-900"
                  : "bg-white text-gray-950"
              } px-6 py-4  border-t justify-end`}
            >
              <Button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2  rounded-xl hover:bg-slate-100 transition-colors mt-5 "
              >
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </div>
  );
};
export default Cards;
