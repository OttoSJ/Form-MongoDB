import axios from "axios";

const API_URL = "/api/users/allUsers";

const getAllFollowers = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);
  return response.data;
};

const followersService = {
  getAllFollowers,
};
export default followersService;
