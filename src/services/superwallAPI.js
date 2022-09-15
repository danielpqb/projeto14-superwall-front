import axios from "axios";

const BASE_URL = "http://localhost:5000";

function postSignUp(user) {
  return axios.post(`${BASE_URL}/account/register`, user);
}

function postSignIn(user) {
  return axios.post(`${BASE_URL}/account/login`, user);
}

function getProducts() {
  return axios.get(`${BASE_URL}/products`);
}

export { postSignUp, postSignIn, getProducts };
