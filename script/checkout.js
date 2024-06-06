import { loadProducts } from "../data/products.js";
import { renderOrderSummry } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
//import '../data/cart-class.js';
//import '../data/backend-pratice.js';

loadProducts(()=>{
    renderOrderSummry();
    renderPaymentSummary();
});
