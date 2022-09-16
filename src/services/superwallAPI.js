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

export { postSignUp, postSignIn, getAllProducts, getOneProduct, getAllOrders };
