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
};

const Cards: React.FC<CardProps> = ({ name, imageSrc }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle modal

  const toggleDialog = () => setIsOpen(!isOpen);

  return (
    <div>
      <Card
        className="w-full shadow-lg  p-1  cursor-pointer hover:bg-gray-50"
        onClick={toggleDialog}
      >
        <CardContent className=" flex justify-between items-center flex-wrap gap-2  p-2  w-full">
          {/* bg-red-400 */}
          <div className="flex justify-between w-fit items-center  flex-wrap py-2">
            {/* bg-slate-600  */}
            {/* Left Icon Section */}
            <div className="flex-shrink-0 p-1 bg-gray-100 rounded-full">
              <CircleArrowOutDownRight className="text-green-400 size-6 " />
            </div>

            {/* Center Info Section */}
            <div className="flex flex-col justify-center items-start text-left m-1 p-1  ">
              <div className="flex  justify-centeritems-center space-x-2 text-lg font-sans">
                <span className="text-gray-700">Received</span>
                <span className="text-gray-400 bg-gray-200  w-fit text-right items-center flex justify-around item-center rounded-xl">
                  <img
                    src={imageSrc}
                    alt="coins_image"
                    className="w-5 h-5 rounded-xl"
                  ></img>
                  <small className="text-right ">{name}</small>
                </span>
              </div>
              <p className="text-gray-400 text-sm">11:25 AM</p>
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
          <DialogContent className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-xl lg:w-full max-w-lg [&>button]:hidden sm:vh-screen sm:w-3/4 ">
            <DialogHeader className="px-6 py-4 border-b">
              <div className="flex items-center justify-between">
                <DialogTitle className="text-xl font-semibold">
                  Deposit
                </DialogTitle>
                <div className="text-gray-400 bg-gray-200 py-1 rounded-xl w-16 flex items-center justify-around">
                  <img
                    src={imageSrc}
                    alt={`${name} icon`}
                    className="w-5 h-7 "
                  />
                  <small>{name}</small>
                </div>
              </div>
            </DialogHeader>

            <div className="p-8 space-y-5">
              <div className="flex justify-between items-center rounded-xl p-6 shadow-md">
                <div className="flex-shrink-0 p-2 bg-gray-200 rounded-full">
                  <CircleArrowOutDownRight className="text-blue-600 h-6 w-6" />
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
                  <p className="text-sm font-medium text-slate-500">
                    1000 {name}
                  </p>
                </div>

                <div className="flex justify-between items-center py-3">
                  <p className="font-bold">Current Equiv Amount</p>
                  <p className="text-sm font-medium text-slate-500">
                    407.31 USD
                  </p>
                </div>

                <div className="flex justify-between items-center py-3">
                  <p className="font-bold">Date</p>
                  <p className="text-sm font-medium text-slate-500">
                    October 30, 2024 at 11:25
                  </p>
                </div>

                <div className="flex justify-between items-center py-3">
                  <p className="font-bold">Note</p>
                  <p className="text-sm font-medium text-slate-500">
                    Demo Deposit
                  </p>
                </div>
              </div>
            </div>

            <DialogFooter className="px-6 py-4  border-t justify-end">
              <Button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-slate-600 rounded-xl hover:bg-slate-200 transition-colors mt-5 "
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
