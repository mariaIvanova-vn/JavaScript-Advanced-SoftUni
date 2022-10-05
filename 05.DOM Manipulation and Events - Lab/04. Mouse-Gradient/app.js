function attachGradientEvents() {
   let gradient = document.getElementById('gradient');
   gradient.addEventListener('mousemove', (event)=>{
    let position=event.offsetX;
    let gradientWidth=event.target.clientWidth - 1;

    let res = Math.trunc(position/gradientWidth*100);

    document.getElementById('result').textContent = res + '%';
   });
   gradient.addEventListener('mouseout', (event=>{
    document.getElementById('result').textContent="";
   }));
}