function search() {
   let towns = Array.from(document.querySelectorAll("ul li"));
   let searchText = document.getElementById("searchText").value;
   let matches = 0;
   
   for(let el of towns){
      let text =el.textContent;

      if(text.includes(searchText)){
         el.style.textDecoration="underline";
         el.style.fontWeight="bold";
         matches++;
      }
      else{
         el.style.textDecoration="none";
         el.style.fontWeight="";
      }
   }
   document.getElementById("result").innerText = `${matches} matches found`;
}
