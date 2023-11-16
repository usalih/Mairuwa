import React from "react";

const PopUp = ({ children, trigger, setTrigger, size }) => {
  return trigger ? (
    <div className="popup">
      <div className={size}>
        <button
          onClick={() => setTrigger(false)}
          className="close-btn font-lg text-xl"
        >
          x
        </button>
        {children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default PopUp;
