const baseUrl = "https://moregooder-api-stage.herokuapp.com";

// WorkspaceId is fetched from environment variable REACT_APP_WORKSPACE_ID
const workspaceId = process.env.REACT_APP_WORKSPACE_ID;

const parentType = "contact";


const url = `${baseUrl}/${workspaceId}/${parentType}`;

export default url;
