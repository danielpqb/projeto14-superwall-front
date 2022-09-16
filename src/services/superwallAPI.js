import axios from "axios";

const BASE_URL = "http://localhost:5000";

function postSignUp(user) {
  return axios.post(`${BASE_URL}/account/register`, user);
}

function postSignIn(user) {
  return axios.post(`${BASE_URL}/account/login`, user);
}

function getAllProducts() {
  return axios.get(`${BASE_URL}/products`);
}

function getOneProduct(id) {
  return axios.get(`${BASE_URL}/products/${id}`);
}

function getAllOrders(token, email) {
  const _token = "Bearer " + token;

  return axios.get(`${BASE_URL}/orders`, {
    headers: { Authorization: _token, email: email },
  });
}

function getUserByToken(token) {
  const _token = "Bearer " + token;

  return axios.get(`${BASE_URL}/userToken`, {
    headers: { Authorization: _token },
  });
}

function postOneOrder(order, header) {
  return axios.post(`${BASE_URL}/orders`, order, header);
}

function deleteOrderId(id, header) {
  return axios.post(`${BASE_URL}/orders/${id}`, header);
}

export {
  postSignUp,
  postSignIn,
  getAllProducts,
  getOneProduct,
  getAllOrders,
  getUserByToken,
  postOneOrder,
  deleteOrderId,
};
