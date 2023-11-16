"use client";
import { useState } from "react";

const OrderForm = () => {
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [amount, setAmount] = useState(100);

  const handleDecrement = () => {
    if (orderQuantity > 1 && amount > 100) {
      setOrderQuantity((prev) => prev - 1);
      setAmount((prev) => prev - 100);
    }
  };

  const handleIncrement = () => {
    if (orderQuantity < 50) {
      setOrderQuantity((prev) => prev + 1);
      setAmount((prev) => prev + 100);
    }
  };
  return (
    <>
      <div className="bg-primary-white text-primary-black border-2 border-primary-blue w-4/5 mx-auto p-4 rounded-xl">
        <form className="flex flex-col items-center lg:flex-row mx-auto w-4/5 lg:w-full">
          <div className="mb-1 w-full border-b-2 border-primary-blue rounded-xl">
            <input
              className="p-2 w-full focus:outline-none"
              type="text"
              placeholder="Location"
            />
          </div>
          <div className="mb-2 w-full border-b-2 border-primary-blue rounded-xl">
            <select
              className="p-2 w-full focus:outline-none"
              name="location"
              placeholder="Vendor"
              id="location"
            >
              <option value="opt1">DBR1</option>
              <option value="opt2">DBR2</option>
              <option value="opt3">DBR3</option>
              <option value="opt4">DBR4</option>
            </select>
          </div>
          <div className="flex justify-between gap-3 mb-2 p-2 w-full lg:w-2/4 border-b-2 border-primary-blue rounded-xl">
            <span
              onClick={handleDecrement}
              className="bg-primary-blue text-primary-white px-3 py-1 rounded-xl cursor-pointer	"
            >
              -
            </span>
            <input
              className="text-center focus:outline-none"
              type="number"
              value={orderQuantity}
              id="quantity"
              min="1"
              max="50"
              readOnly
            />
            <span
              onClick={handleIncrement}
              className="bg-primary-blue text-primary-white px-3 py-1 rounded-xl cursor-pointer	"
            >
              +
            </span>
          </div>
          <div className="mb-2 w-full lg:w-2/4 border-b-2 border-primary-blue rounded-xl">
            <input
              className="text-center p-2 w-full focus:outline-none"
              type="number"
              value={amount}
              min="100"
              readOnly
            />
          </div>
          <button
            type="submit"
            className="bg-primary-blue px-4 py-3 lg:w-2/4 rounded-xl text-primary-white mx-auto"
          >
            Place Request
          </button>
        </form>
      </div>
    </>
  );
};

export default OrderForm;
