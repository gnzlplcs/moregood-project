import React from "react";

const Address = ({ info }) => {
  const { contactName, contactCountry, contactCity, contactStreet } = info;

  return (
    <div>
      <h2>Address</h2>
      {contactStreet &&
        `${contactName} lives in ${contactStreet}, ${contactCity} ${contactCountry}`}
      {!contactStreet && contactCity &&
        `${contactName} lives in ${contactCity} ${contactCountry}`}
      {!contactStreet && !contactCity && contactCountry &&
        `${contactName} lives in ${contactCountry}`}
      {!contactStreet && !contactCity && !contactCountry &&
        `${contactName} has an unknown address`}
    </div>
  );
};

export default Address;
