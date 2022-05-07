import './App.css';

const baseUrl = "https://moregooder-api-stage.herokuapp.com";
const workspaceId = process.env.REACT_APP_WORKSPACE_ID;
const API_KEY = process.env.REACT_APP_API_KEY;
const parentType = "contact";
const query = "data=trait";

function App() {
  const url = `${baseUrl}/${workspaceId}/${parentType}?${query}`;



  return (
    <div className="App">
      <h1>MoreGood Project</h1>
    </div>
  );
}

export default App;
