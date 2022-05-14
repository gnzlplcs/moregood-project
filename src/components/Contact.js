import React, { useEffect, useState } from "react";
import axios from "axios";
import { getByIdUrl } from "../utils/url";
import customHeaders from "../utils/customHeaders";

const Contact = (props) => {
  const [contactTraits, setContactTraits] = useState([]);

  useEffect(() => {
    getContactById(props.id);
  }, [props]);

  const getContactById = (id) => {
    axios(`${getByIdUrl}/${id}`, customHeaders)
      .then((res) => setContactTraits(res.data.body.traits))
      .catch((err) => console.error(`Error fetching contacts: ${err}`));
  };

  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");

  useEffect(() => {
    getName();
    getEmail();
  }, [contactTraits]);

  const getName = () =>
    contactTraits.map(
      (item) => item.name === "name" && setContactName(item.value)
    );

  const getEmail = () =>
    contactTraits.map(
      (item) => item.name === "email" && setContactEmail(item.value)
    );

  return <div>{contactName} {contactEmail}</div>;
};

export default Contact;
