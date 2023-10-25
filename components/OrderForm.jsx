import React from "react";

const OrderForm = () => {
  return (
    <>
      <div>
        <form>
          <div>
            <input type="text" />
          </div>
          <div>
            <select name="location" id="location">
              <option value="opt1">DBR1</option>
              <option value="opt2">DBR2</option>
              <option value="opt3">DBR3</option>
              <option value="opt4">DBR4</option>
            </select>
          </div>
          <div>
            <button>-</button>
            <input type="number" value="1" id="quantity" min="1" max="100" />
            <button>+</button>
          </div>
          <div>
            <input type="number" value="N100" />
          </div>
          <button type="submit">Place Request</button>
        </form>
      </div>
    </>
  );
};

export default OrderForm;
