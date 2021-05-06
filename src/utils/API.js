import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=200&nat=us";
const APIKEY = "?results=";

// Export an object with a "search" method that searches the Giphy APU for the passed query
export default {
  search: function () {
    return axios.get(BASEURL + APIKEY + query);
  },
};
