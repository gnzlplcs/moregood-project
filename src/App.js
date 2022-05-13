import { useEffect, useState } from "react";
import axios from "axios";
import { queryUrl } from "./utils/url";
import customHeaders from "./utils/customHeaders";
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

  console.log(rawData)

  return (
    <div className="App">
      <h1>Contacts</h1>
    </div>
  );
}

export default App;
