function extractText() {
   let items = document.querySelectorAll('ul li');

   let text = document.getElementById('result');

   for(let item of items){
    text.value+=item.textContent + '\n';
   }
}