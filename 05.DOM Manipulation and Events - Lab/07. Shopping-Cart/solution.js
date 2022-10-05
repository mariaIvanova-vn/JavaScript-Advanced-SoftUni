function solve() {
   let shopingCard = document.getElementsByClassName('shopping-cart')[0];
   let result = document.getElementsByTagName('textarea')[0];

   let products = [];
   let totalPrice = 0;
   let checkOut = false;

   shopingCard.addEventListener('click', function (event) {
      if (event.target.nodeName !== 'BUTTON') {
         return;
      }
     
      let button = event.target;
      if(checkOut ===true){
         return;
      }
      if (Array.from(button.classList).indexOf('add-product') >= 0) {
         let product = event.target.parentElement.parentElement;
         console.log(product)
         let name = product.querySelectorAll('.product-title')[0].textContent;
         let price = product.querySelectorAll('.product-line-price')[0].textContent;

         result.textContent += `Added ${name} for ${price} to the cart.\n`;

         if (products.indexOf(name) < 0) {
            products.push(name);
         }
         totalPrice += Number(price);
      }
      else if (Array.from(button.classList).indexOf('checkout') >= 0) {
checkOut=true;
let list=products.join(", ");
result.textContent += `You bought ${list} for ${totalPrice.toFixed(2)}.`
      }
   })
}