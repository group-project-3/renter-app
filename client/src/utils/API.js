import axios from "axios";

export default {
  getAuthenticatedUser: function () {
    return axios.get("/api/users");
  },
  login: function () {
    return axios.post("/api/users/login");  
  },
  logout: function () {
    return axios.post("/api/users/logout");  
  },
};
