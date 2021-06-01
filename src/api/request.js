import axios from "axios";
let datos;

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://127.0.0.1:8000/";

axios
 .get(api / articulos)
 .then((response) => {
  let articulos = response.data;
  articulos;
 });
axios
 .post(api / articulos, datos)
 .then((response) => {
  let articulos = response.data;
  articulos;
 });
axios
 .put(api / articulos, url)
 .then((response) => {
  let articulos = response.data;
  articulos;
 });
axios
 .delete(api / articulos, id)
 .then((response) => {
  let articulos = response.data;
  articulos;
 });