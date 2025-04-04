import './style.css'
import './style.css';

import products from '../api/products.json';

import { showProductContainer } from "../homeProductCard.js";
// import { addToCart } from "./addToCart";
console.log(products);
showProductContainer(products);