import { useEffect, useState } from "react";
import axios from "axios";
import { queryUrl } from "./utils/url";
import customHeaders from "./utils/customHeaders";
import Contacts from "./components/Contacts";
import "./App.css";
import SearchBox from "./components/SearchBox";

function App() {
  const [rawData, setRawData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios(queryUrl, customHeaders)
      .then((res) => setRawData(res.data.body))
      .catch((err) => console.error(`Error fetching data: ${err}`));
  };

  const getId = rawData.map((item) => item.id);

  const [idCollection, setIdCollection] = useState([]);
  
  useEffect(() => {
    setIdCollection(getId);
  }, [rawData]);

  const handleChange = (e) => {
    setSearchInput(e.target.value.toLowerCase());
  };

  return (
    <div className="App">
      <h1>Contacts</h1>
      <SearchBox onChange={handleChange} />
      <Contacts list={idCollection} filteredSearch={searchInput} />
    </div>
  );
}

export default App;
