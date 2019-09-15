import Axios from "axios";

export default Axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID b83797336e649440e5d29d47596891811381fe501459786693790398cc2f8625"
  }
});
