import axios from "axios";

const host = "http://localhost:5000/api";

export const setToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const call = async (method, path, data) => {
  // the below line can be a get/post/delete/put request
  //eg axios.get("/any",variable) , here .get == [method] , path == "/any"
  const response = await axios[method](`${host}/${path}`, data);
  return response.data;
};

export default { call, setToken };
