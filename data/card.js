const card=[];
function addToCart(productId){ 
    let matchingItem;

    card.forEach((cartItem)=>{
      if(productId===cartItem.productId){
        matchingItem=cartItem;
      }
    });
    if(matchingItem){
      matchingItem.quantity+=1;
    }else{
      card.push({
        productId: productId ,
        quantity:Math.floor(document.querySelector(`.js-quantity-selector-${productId}`).value)
      });
    }
}