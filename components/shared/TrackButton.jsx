import PopUp from "./PopUp";
import { useState } from "react";

const TrackButton = () => {
  const [isTrigger, setIsTrigger] = useState(false);
  const [isDispatched, setIsDispatched] = useState(false);
  const [isDelivered, setIsDelivered] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  return (
    <>
      <PopUp trigger={isTrigger} setTrigger={setIsTrigger} size={"popup-inner"}>
        <div>
          <div className="flex">
            <div className="flex flex-col items-center">
              <div className=" w-4 h-4 rounded-full border-4 border-primary-blue "></div>
              <div className="w-1 h-24 bg-primary-blue mt-1"></div>
            </div>
            <div className="ml-4 text-lg -mt-2">Order Accepted</div>
          </div>
          <div className={isDispatched ? "flex mt-1" : "flex mt-1 opacity-50"}>
            <div className="flex flex-col items-center">
              <div className=" w-4 h-4 rounded-full border-4 border-primary-blue "></div>
              <div className="w-1 h-24 bg-primary-blue mt-1"></div>
            </div>
            <div className="ml-4 text-lg -mt-2">Order Dispatched</div>
          </div>
          <div className={isDelivered ? "flex mt-1" : "flex mt-1 opacity-50"}>
            <div className="flex flex-col items-center">
              <div className=" w-4 h-4 rounded-full border-4 border-primary-blue "></div>
              <div className="w-1 h-24 bg-primary-blue mt-1"></div>
            </div>
            <div className="ml-4 text-lg -mt-2">Order Delivered</div>
          </div>
          <div className={isSuccessful ? "flex mt-1" : "flex mt-1 opacity-50"}>
            <div className="flex flex-col items-center">
              <div className=" w-4 h-4 rounded-full border-4 border-primary-blue "></div>
            </div>
            <div className="ml-4 text-lg -mt-2">Delivered Successful</div>
          </div>

          <div className="mt-5 flex justify-center">
            {isDispatched ? (
              isDelivered ? (
                isSuccessful ? (
                  <p>Thanks</p>
                ) : (
                  <button className="p-3 rounded-xl bg-primary-blue text-primary-white">
                    Accept Order
                  </button>
                )
              ) : (
                <button className="p-3 rounded-xl bg-primary-blue text-primary-white opacity-50">
                  Accept Order
                </button>
              )
            ) : (
              <button className="p-3 border rounded-xl border-primary-red text-primary-red">
                Cancel Order
              </button>
            )}
          </div>
        </div>
      </PopUp>
      <button
        onClick={() => setIsTrigger(true)}
        className="bg-primary-blue text-primary-white w-1/4 rounded-xl px-2 py-1"
      >
        Track
      </button>
    </>
  );
};

export default TrackButton;
