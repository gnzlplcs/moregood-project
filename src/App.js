import { useEffect, useState } from "react";
import axios from "axios";
import { queryUrl } from "./utils/url";
import customHeaders from "./utils/customHeaders";
import Contacts from "./components/Contacts";
import "./App.css";

function App() {
  const [rawData, setRawData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios(queryUrl, customHeaders)
    .then((res) => setRawData(res.data.body))
    .catch((err) => console.error(`Error fetching data: ${err}`));
  };

  const getId = rawData.map(item => item.id)

  const [idCollection, setIdCollection] = useState([])
  useEffect(() => {
    setIdCollection(getId)
  }, [rawData])

  return (
    <div className="App">
      <h1>Contacts</h1>
      <Contacts list={idCollection}/>
    </div>
  );
}

export default App;
