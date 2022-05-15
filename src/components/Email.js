import React from "react";

const Email = ({ info }) => {
  const { contactName, contactEmail } = info;

  return (
    <section className="card-body">
      <h2 className="card-title display-5">📨 Contact</h2>
      <p className="card-text display-6">Email: {contactEmail}</p>
      <a className="badge badge-success" href={`mailto:${contactEmail}`}>
        <button type="button" className="btn btn-warning">
          Send a message to {contactName}
        </button>
      </a>
    </section>
  );
};

export default Email;
