// API key is fetched from the environment variable REACT_APP_API_KEY
const API_KEY = process.env.REACT_APP_API_KEY;

const customHeaders = {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json; charset=utf-8",
  },
};

export default customHeaders;
