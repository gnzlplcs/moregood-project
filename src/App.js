import { useEffect, useState } from "react";
import bearer from "./utils/bearer";
import url from "./utils/url";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `${bearer}`,
        "Content-Type": "application/json; charset=utf-8",
      },
    });
    const responseJSON = await response.json();
    setContacts(responseJSON.body);
  };

  console.log(contacts)

  const contactsList = contacts.map((contact) => (
    <li key={contact.id}>{contact.id}</li>
  ));

  return (
    <div className="App">
      <h1>MoreGood Project</h1>
      <ul>{contactsList}</ul>
    </div>
  );
}

export default App;
