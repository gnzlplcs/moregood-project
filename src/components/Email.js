import React from "react";

const Email = ({ info }) => {
  const { contactName, contactEmail } = info;

  return (
  <div>
    <p>Email: {contactEmail}</p>
    <p><a href={`mailto:${contactEmail}`}>Send a message to {contactName}</a></p>
  </div>
  );
};

export default Email;
