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

  rentItem: () => { },

 // Location
 findAllLocations: () => {
  return axios.get("/api/locations");
  },

  //imgur upload
  uploadImage: (image) => {
    return axios({
        method: 'post',
        crossDomain: true,
        url: 'https://api.imgur.com/3/upload',
        data: {'image': image},
        headers: {Authorization: 'Client-ID ' + process.env.IMGUR_CLIENT_ID},
    });
  }

};
