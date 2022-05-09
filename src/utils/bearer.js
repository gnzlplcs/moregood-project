// API key is fetched from the environment variable REACT_APP_API_KEY
const API_KEY = process.env.REACT_APP_API_KEY;

const bearer = `Bearer ${API_KEY}`;

export default bearer;