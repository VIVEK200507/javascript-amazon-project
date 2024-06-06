import { renderOrderSummry } from "../../script/checkout/orderSummary.js";
import {loadFromStroage } from "../../data/cart.js";
import { loadProducts } from "../../data/products.js";

describe('suit:renderOrderSummary',()=>{
    const productId1='e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
    const productId2='15b6fc6f-327a-4ec4-896f-486349e85a3d';

    beforeAll((done)=>{
        loadProducts(()=>{
            done();
        });
    });

    beforeEach(()=>{
        document.querySelector('.js-test-container').innerHTML=` 
        <div class="js-order-summary"></div>
        <div class="js-payment-summary"></div>`;

    spyOn(localStorage,'getItem').and.callFake(()=>{
        return JSON.stringify([{
            productId: productId1,
            quantity: 2,
            deliveryOptionId:'1'
          }, {
            productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
            quantity: 1,
            deliveryOptionId:'2'
          }]);
    });
    loadFromStroage();
    renderOrderSummry(); 
    });

    it('display the cart',()=>{

    expect(
        document.querySelectorAll('.js-cart-item-container').length
    ).toEqual(2);

    expect(
        document.querySelector(`.js-product-quantity-${productId1}`).innerText
    ).toContain('Quantity: 2');

    expect(
        document.querySelector(`.js-product-quantity-${productId2}`).innerText
    ).toContain('Quantity: 1'); 
});

it('remove a product',()=>{
    document.querySelector(`.js-delete-link-${productId1}`).click(); 
    expect(
        document.querySelectorAll('.js-cart-item-container').length
    ).toEqual(1);
    expect(
        document.querySelector(`.js-cart-tiem-container-${productId1}`)
    ).toEqual(null);
    expect(
        document.querySelector(`.js-cart-tiem-container-${productId2}`)
    ).not.toEqual('null');
    
    });
});