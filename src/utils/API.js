import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=100&gender=";

export default {
  search: function (query) {
    return axios.get(BASEURL + query);
  },
};

console.log("API call", axios.get(BASEURL));
