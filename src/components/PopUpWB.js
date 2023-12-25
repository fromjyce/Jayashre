import React from "react";
import { IoCloseCircle } from "react-icons/io5";
import "../styles/PopUp.css";

function PopUpWB(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner-white-black">
        <button
          className="close-button"
          onClick={() => props.setTrigger(false)}
        >
          <IoCloseCircle size={25} color="#302F2F" />
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default PopUpWB;
