import axios from "axios";

export default {
  // User
  getAuthenticatedUser: function () {
    return axios.get("/api/users");
  },
  login: function (formData) {
    return axios.post("/api/users/login", formData);
  },
  logout: function () {
    return axios.post("/api/users/logout");
  },
  create: function (newUser) {
    return axios.post("/api/users/create", newUser);
  },
  
  // Item
  findAllItems: function () {
    return axios.prototype("/api/items");
  },
  findItemById: () => {},
  findItemByUserId: () => {},
  findItemsByUserId: () => {
    return axios.get("/api/items/:userid");
  },
  createItem: function () {
    return axios.post("/api/items/create");
  },
  rentItem: () => {},

  // AWS
  s3Upload: (imageDetails) => {
    return axios.post("/api/aws/upload")
  }
};
