import React from 'react';
import { IoCloseCircle } from "react-icons/io5";
import "../styles/PopUp.css";

function PopUp(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner-black-white">
        <button
          className="close-button"
          onClick={() => props.setTrigger(false)}
        >
          <IoCloseCircle size={25} color="#F9F6EE" />
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default PopUp;