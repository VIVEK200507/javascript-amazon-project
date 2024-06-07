import { loadProducts,loadProductsFetch } from "../data/products.js";
import { renderOrderSummry } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadCart } from "../data/cart.js";
//import '../data/cart-class.js';
//import '../data/backend-pratice.js';
async function loadPage(){
    await loadProductsFetch();
   const value= await new Promise((resolve)=>{
        loadCart(()=>{
        resolve();
      });
     });
    renderOrderSummry();
    renderPaymentSummary();
}
loadPage();

// Promise.all([
//     loadProductsFetch(),
//     new Promise((resolve)=>{
//         loadCart(()=>{
//            resolve();
//            });
//     }),

// ]).then((values)=>{
//     console.log(values);
    // renderOrderSummry();
    // renderPaymentSummary();
// });

// new Promise((resolve)=>{
  
//     loadProducts(()=>{
//         resolve('value1');
//     });

// }).then((value)=>{
//     console.log(value);
//     return new Promise((resolve)=>{
//      loadCart(()=>{
//         resolve();
//         });
//     });

// }).then(()=>{
//     renderOrderSummry();
//     renderPaymentSummary();
// });

// loadProducts(()=>{
//     loadCart(()=>{
//         renderOrderSummry();
//         renderPaymentSummary();
//     });
    
// });
