import axios from "axios";

const KEY = "AIzaSyDQOIEui2rhlnZ96gbWxhCmOlGw7l9wN2Y";

export default axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 25,
    key: KEY,
    type: "video",
  },
});
