import { useEffect, useState } from "react";
import bearer from "./utils/bearer";
import url from "./utils/url";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    try {
      fetch(url, {
        method: "GET",
        headers: {
          Authorization: `${bearer}`,
          "Content-Type": "application/json; charset=utf-8",
        }
      })
      .then(response => response.json())
      .then(data => setContacts(data.body))
    } catch (err) {
      console.error(err)
    }
  }, [])

  console.log(contacts)

  return (
    <div className="App">
      <h1>Contacts</h1>
      {contacts.map((contact) => (
        <div key={contact.id}>Contact {contact.id}</div>
      ))}
    </div>
  );
}

export default App;
