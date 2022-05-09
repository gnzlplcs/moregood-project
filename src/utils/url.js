const baseUrl = "http://localhost:3000";

// WorkspaceId is fetched from environment variable REACT_APP_WORKSPACE_ID
const workspaceId = process.env.REACT_APP_WORKSPACE_ID;

const parentType = "contact";
const query = "data=trait";
const url = `${baseUrl}/${workspaceId}/${parentType}?${query}`;

export default url;
