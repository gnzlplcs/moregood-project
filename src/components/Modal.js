import React from "react";
import '../style/Modal.css';

const Modal = ({ info }) => {
  const {
    contactName,
    contactEmail,
    contactCountry,
    contactCity,
    contactState,
    contactFavColor,
    contactStreet,
    contactTagArray,
  } = info;

  console.log(contactName);

  const showTags = () => contactTagArray.map((tag, index) => (
    <p key={tag + index}>{tag.name}</p>
  ))

  return (
    <div className="container-modal">
      <h1>About {contactName}</h1>
      <p>Email: {contactEmail}</p>
      <a href={`mailto:${contactEmail}`}>Send a message</a>
      <div>
        <h2>Address</h2>
        {contactStreet && `${contactName} lives in ${contactStreet}`}
        {contactTagArray.length > 0 ? showTags() : 'No tags to show'}
      </div>
      <button onClick={info.handleModal}>Close</button>
    </div>
  );
};

export default Modal;
