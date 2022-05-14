import { useEffect, useState } from "react";
import axios from "axios";
import { queryUrl } from "./utils/url";
import customHeaders from "./utils/customHeaders";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  const [rawData, setRawData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios(queryUrl, customHeaders)
    .then((res) => setRawData(res.data.body))
    .catch((err) => console.log(`Error fetching data: ${err}`));
  };

  const getId = rawData.map(item => item.id)

  const [idCollection, setIdCollection] = useState([])
  useEffect(() => {
    setIdCollection(getId)
  }, [rawData])

  console.log(rawData)
  console.log(idCollection)

  return (
    <div className="App">
      <h1>Contacts</h1>
      <Contact />
    </div>
  );
}

export default App;
