function create(words) {
   for (let w of words) {
      let div = document.createElement('div');
      let p = document.createElement('p');

      p.innerText = w;
      p.style.display = 'none';

      div.appendChild(p);
      div.addEventListener('click', (event => {
         if (event.target.nodeName === 'p') {
            return;
         }
         let p = event.target.children[0];
         p.style.display = 'block';
      }));
      document.getElementById('content').appendChild(div);
   }
}