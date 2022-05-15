import React from "react";
import "../style/Modal.css";
import Address from "./Address";
import Email from "./Email";
import Tags from "./Tags";

const Modal = ({ info }) => {
  const { contactName, contactTagArray } = info;

  return (
    <div className="container-modal">
      <h1>About {contactName}</h1>
      <Email info={info} />
      <Address info={info} />
      <Tags tags={contactTagArray} />
      <button onClick={info.handleModal}>Close this window</button>
    </div>
  );
};

export default Modal;
