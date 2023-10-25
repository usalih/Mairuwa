import React from "react";

const OrderForm = () => {
  return (
    <>
      <div className="bg-primary-white border-2 border-primary-blue w-4/5 mx-auto p-4 rounded-xl">
        <form>
          <div>
            <input type="text" placeholder="Location" />
          </div>
          <div>
            <select name="location" placeholder="Vendor" id="location">
              <option value="opt1">DBR1</option>
              <option value="opt2">DBR2</option>
              <option value="opt3">DBR3</option>
              <option value="opt4">DBR4</option>
            </select>
          </div>
          <div className="flex gap-2">
            <button className="bg-primary-blue text-primary-white px-3 py-1 rounded-xl">
              -
            </button>
            <input type="number" value="1" id="quantity" min="1" max="100" />
            <button className="bg-primary-blue text-primary-white px-3 py-1 rounded-xl">
              +
            </button>
          </div>
          <div>
            <input type="number" value="N100" />
          </div>
          <button
            type="submit"
            className="bg-primary-blue px-4 py-3 rounded-xl"
          >
            Place Request
          </button>
        </form>
      </div>
    </>
  );
};

export default OrderForm;
