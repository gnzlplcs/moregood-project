import React from "react";
import "../style/Modal.css";
import Address from "./Address";
import Email from "./Email";
import Tags from "./Tags";

const Modal = ({ info }) => {
  const { contactName, contactTagArray } = info;

  return (
    <div className="card card-modal text-white bg-secondary p-3 mb-3">
      <header className="card-header d-flex justify-content-between">
        <h1 className="card-title display-4">About {contactName}</h1>
        <button
          className="btn-close btn-close-white"
          onClick={info.handleModal}
        />
      </header>
      <Address info={info} />
      <Tags tags={contactTagArray} />
      <Email info={info} />
    </div>
  );
};

export default Modal;
