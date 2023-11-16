import { useState } from "react";
import PopUp from "@/components/shared/PopUp";
import TrackButton from "./shared/TrackButton";

const Notification = () => {
  const [isTrigger, setIsTrigger] = useState(false);
  return (
    <>
      <PopUp
        trigger={isTrigger}
        setTrigger={setIsTrigger}
        size={"popup-inner-small"}
      >
        <p className="text-center my-2">
          Your order has been received and is being processed.{" "}
        </p>
        <p className="text-center mb-3">
          Please, be patient, you will receive your order, in 15 minutes or less
          after it’s being accepted.
        </p>
        <div className="flex justify-center">
          <TrackButton />
        </div>
      </PopUp>
      <div className="text-sm">
        <div className="flex gap mb-1 rounded-xl border border-primary-blue p-3 cursor-pointer">
          <p onClick={() => setIsTrigger(true)}>
            Your order to Dambare, Opp. BUK New site is accepted
            <span className="text-primary-blue pl-2">9:35am</span>
          </p>
          <TrackButton />
        </div>
        <div className="flex gap mb-1 rounded-xl border border-primary-blue p-3 cursor-pointer">
          <p onClick={() => setIsTrigger(true)}>
            Your order to Dambare, Opp. BUK New site is accepted
            <span className="text-primary-blue pl-2">9:35am</span>
          </p>
          <TrackButton />
        </div>
        <div className="flex gap mb-1 rounded-xl border border-primary-blue p-3 cursor-pointer">
          <p onClick={() => setIsTrigger(true)}>
            Your order to Dambare, Opp. BUK New site is accepted
            <span className="text-primary-blue pl-2">9:35am</span>
          </p>
          <TrackButton />
        </div>
      </div>
    </>
  );
};

export default Notification;
