import React, { useEffect, useState } from "react";
import axios from "axios";
import { getByIdUrl } from "../utils/url";
import customHeaders from "../utils/customHeaders";

const Contact = (props) => {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    getContactById(props.id);
  }, [props]);

  const getContactById = (id) => {
    axios(`${getByIdUrl}/${id}`, customHeaders)
      .then((res) => setContact(res.data.body.traits))
      .catch((err) => console.error(`Error fetching contacts: ${err}`));
  };

  console.log(contact);

  return <div>Contact {props.id}</div>;
};

export default Contact;
