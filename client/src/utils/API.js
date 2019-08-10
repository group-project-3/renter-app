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
    return axios.get("/api/items");
  },
  findItemById: () => {},
  findItemByUserId: () => {},
  findItemsByUserId: () => {
    return axios.get("/api/items/:userid");
  },
  createItem: function (itemObject) {
    return axios.post("/api/items/create", itemObject);
  },

  // Location
  findAllLocations: () => {
    return axios.get("/api/locations");
  },

  // Items Rented
  findAllRentedItems: () => {
    return axios.get("api/itemsRented")
  },
  findItemItemsByUser: () => {
    return axios.get("/api/itemsRented/:user")
  },
  rentItem: (item_id) => {
    return axios.post("/api/itemsRented/rentItem", item_id)
  },

  returnItem: (item_id) => {
    return axios.post("api/itemsRented/returnItem", item_id)
  },
  
   //imgur upload
   imageUpload: (bodyFormData) => {

    return axios({
        url: 'https://api.imgur.com/3/image',
        method: 'POST',
        headers: {
          'Authorization': 'Client-ID 4ab89fea97d23c8',
          'Content-Type': "multipart/form-data"
          },
        data: bodyFormData,
        })
      }
};
