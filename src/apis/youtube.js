import axios from "axios";

const KEY = "AIzaSyARbLWkYcjhy4IUPtoerS1MBm_yke3Nit4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
