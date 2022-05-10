import { useEffect } from "react";
import bearer from "./utils/bearer";
import url from "./utils/url";
import "./App.css";

function App() {
  const fetchApi = async () => {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `${bearer}`,
        "Content-Type": "application/json; charset=utf-8",
      },
    });
    const responseJSON = await response.json();
    console.log(responseJSON.body);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="App">
      <h1>MoreGood Project</h1>
    </div>
  );
}

export default App;
