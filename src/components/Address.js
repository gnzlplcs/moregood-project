import React from "react";

const Address = ({ info }) => {
  const { contactName, contactCountry, contactCity, contactStreet } = info;

  return (
    <section className="card-body">
      <h2 className="card-title display-5">🏠 Address</h2>
      {contactStreet &&
        <p className="card-text display-6">{contactName} lives in {contactStreet}, {contactCity} {contactCountry}</p>}
      {!contactStreet && contactCity &&
        <p className="card-text display-6">{contactName} lives in {contactCity} {contactCountry}</p>}
      {!contactStreet && !contactCity && contactCountry &&
        <p className="card-text display-6">{contactName} lives in {contactCountry}</p>}
      {!contactStreet && !contactCity && !contactCountry &&
        <p className="card-text display-6">{contactName} has an unknown address</p>}
    </section>
  );
};

export default Address;
