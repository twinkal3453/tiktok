import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktok-mern-backendo.herokuapp.com",
});

export default instance;
