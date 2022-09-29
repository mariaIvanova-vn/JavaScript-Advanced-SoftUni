function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let input = document.getElementById("searchField");
      let inputText = input.value.toLowerCase();

      let tableEl = Array.from(document.querySelectorAll("tbody tr"));

      tableEl.forEach((el) => {
         let text = el.textContent.toLowerCase();
         if (text.includes(inputText)) {
            el.classList.add("select");
         } else {
            el.classList.remove("select");
         }
      })
      input.value = "";
   }
}