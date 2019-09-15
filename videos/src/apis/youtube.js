import Axios from "axios";
const KEY = "AIzaSyAOc3ajtvei0eMgOlatAnQtsRq4toQ2HaU";


export default Axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
