import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "./Modal";
import { getByIdUrl } from "../utils/url";
import customHeaders from "../utils/customHeaders";

const Contact = (props) => {
  const [contactTraits, setContactTraits] = useState([]);
  const [contactTags, setContactTags] = useState([]);

  useEffect(() => {
    getContactById(props.id);
  }, [props]);

  const getContactById = (id) => {
    axios(`${getByIdUrl}/${id}`, customHeaders)
      .then((res) => {
        setContactTraits(res.data.body.traits);
        setContactTags(res.data.body.tags);
      })
      .catch((err) => console.error(`Error fetching contacts data: ${err}`));
  };

  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactFavColor, setContactFavColor] = useState("");
  const [contactState, setContactState] = useState("");
  const [contactStreet, setContactStreet] = useState("");
  const [contactCountry, setContactCountry] = useState("");
  const [contactCity, setContactCity] = useState("");
  const [contactTagArray, setContactTagArray] = useState([]);

  useEffect(() => {
    getName();
    getEmail();
    getFavColor();
    getState();
    getStreet();
    getCountry();
    getCity();
    getContactTags();
  }, [contactTraits]);

  const getName = () =>
    contactTraits.map(
      (item) => item.name === "name" && setContactName(item.value)
    );

  const getEmail = () =>
    contactTraits.map(
      (item) => item.name === "email" && setContactEmail(item.value)
    );

  const getFavColor = () =>
    contactTraits.map(
      (item) => item.name === "favorite color" && setContactFavColor(item.value)
    );

  const getState = () =>
    contactTraits.map(
      (item) => item.name === "state" && setContactState(item.value)
    );

  const getStreet = () =>
    contactTraits.map(
      (item) => item.name === "street" && setContactStreet(item.value)
    );

  const getCountry = () =>
    contactTraits.map(
      (item) => item.name === "country" && setContactCountry(item.value)
    );

  const getCity = () =>
    contactTraits.map(
      (item) => item.name === "city" && setContactCity(item.value)
    );

  const getContactTags = () =>
    contactTags.map(
      (tag) => tag.name && setContactTagArray([...contactTags, tag.name])
    );

  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal((prev) => !prev);
  };

  const contactInfo = {
    contactName,
    contactEmail,
    contactCountry,
    contactCity,
    contactState,
    contactFavColor,
    contactStreet,
    contactTagArray,
    handleModal,
  };

  return (
    <div>
      {(contactName.toLocaleLowerCase().includes(props.filter) ||
        contactEmail.toLocaleLowerCase().includes(props.filter)) && (
        <div className="container bg-primary text-white p-3 mb-2 d-flex flex-row justify-content-between align-items-center">
            <h3 className="display-6 text-left ">{contactName}</h3>
          <button
            className="btn btn-warning p-2 align-self-center"
            onClick={handleModal}
          >
            More details
          </button>
          {modal && <Modal info={contactInfo} />}
        </div>
      )}
    </div>
  );
};

export default Contact;
