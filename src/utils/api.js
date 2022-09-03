import axios from "axios";

export const getData = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/"
  );
  return response;
};

export const addData = async (data) => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    data
  );
  return response;
};

export const deleteData = async (id) => {
  const response = await axios.delete(
    `https://jsonplaceholder.typicode.com/posts/${id}/`
  );
  return response;
};
export const updateData = async (id, data) => {
  const response = await axios.put(
    `https://jsonplaceholder.typicode.com/posts/${id}/`,
    data
  );
  return response;
};
