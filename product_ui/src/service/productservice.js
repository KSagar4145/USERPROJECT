import axios from "axios";
const API_URL = "http://localhost:8989";

const saveProduct = (product) => {
  return axios.post(API_URL + "/saveProduct/", product);
};
const getAllProduct = () => {
  return axios.get(API_URL + "/");
};
const getProductById = (id) => {
  console.log("Indise GET ELEMENT BY ID SERVICE LAYERservice")
  return axios.get(API_URL + "/"+ id);
};
const deleteProduct = (id) => {
  console.log("Indise eservice")
  return axios.delete(API_URL + "/deleteProduct/"+ id);
};
const editProduct = (product) => {
  return axios.put(API_URL + "/editProduct/"+ product.id,product);
};

export default {
  saveProduct,
  getAllProduct,
  getProductById,
  deleteProduct,
  editProduct,
};
