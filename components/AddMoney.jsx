import { useState } from "react";
const AddMoney = () => {
  const [isActive, setIsActive] = useState({
    div1: true,
    div2: false,
  });

  const handleClick = (name) => {
    const newIsActive = { ...isActive };

    newIsActive[name] = !newIsActive[name];

    if (newIsActive[name]) {
      for (const key in newIsActive) {
        if (key !== name) {
          newIsActive[key] = false;
        }
      }
    }

    setIsActive(newIsActive);
  };
  return (
    <>
      <div className="lg:flex gap-3">
        <div className="lg:w-1/4">
          <div
            onClick={() => handleClick("div1")}
            className="flex gap-2 items-center cursor-pointer"
          >
            <div className="h-4 w-4 rounded-full border flex justify-center items-center">
              {isActive.div1 && (
                <div className="h-3 w-3 rounded-full bg-primary-black"></div>
              )}
            </div>
            <div>Pay with Card</div>
          </div>
          <div
            onClick={() => handleClick("div2")}
            className="flex gap-2 items-center cursor-pointer"
          >
            <div className="h-4 w-4 rounded-full border flex justify-center items-center">
              {isActive.div2 && (
                <div className="h-3 w-3 rounded-full bg-primary-black"></div>
              )}
            </div>
            <div>Peer To Peer</div>
          </div>
        </div>
        <div className="w-full lg:w-3/4 lg:flex justify-center items-center ">
          {isActive.div1 && (
            <div className="pt-8">
              <form action="">
                <div className=" mb-3 p-2 w-full border border-primary-blue rounded-lg">
                  <input
                    className="p-1 w-full focus:outline-none"
                    type="text"
                    placeholder="Enter Amount"
                  />
                </div>
                <div className=" mb-3 p-2 w-full border border-primary-blue rounded-lg">
                  <input
                    className="p-1 w-full focus:outline-none"
                    type="text"
                    placeholder="Card Number"
                  />
                </div>
                <div className="flex justify-between ">
                  <div className="  mb-3 p-2  border border-primary-blue rounded-lg">
                    <input
                      className="p-1 w-full focus:outline-none"
                      type="text"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div className=" mb-3 p-2  border border-primary-blue rounded-lg">
                    <input
                      className="p-1 w-full focus:outline-none"
                      type="text"
                      placeholder="CVC"
                    />
                  </div>
                </div>
                <button className="w-full p-3 text-primary-white bg-primary-blue rounded-lg">
                  Pay
                </button>
              </form>
            </div>
          )}
          {isActive.div2 && (
            <div className="pt-8">
              <div className="font-black text-center text-2xl">1234567890</div>
              <div className="text-center mb-2">
                <p>MaiRuwa Digital Wallet</p>
                <p>CSSMB Microfinance Bank NG</p>
              </div>
              <div className="flex justify-center">
                <button className="w-3/4 p-3 text-primary-white bg-primary-blue rounded-lg">
                  Copy Number
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AddMoney;
