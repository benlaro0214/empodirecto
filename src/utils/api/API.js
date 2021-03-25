import axios from "axios";

//This will draw 20 users from the US (Hence in English) from randomuser.me
export const getUsers = function() {
  return axios.get("https://randomuser.me/api/?results=20&nat=us");
};
