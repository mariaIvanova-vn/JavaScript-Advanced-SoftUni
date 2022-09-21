function solve(arrOfNames) {
     let result = arrOfNames.sort((a,b) => a.localeCompare(b));

     for(let i = 0; i < result.length; i++){
         console.log(`${i+1}.${result[i]}`);
     } 

 //   arrOfNames.sort((a, b) => a.localeCompare(b))
   //     .forEach((x, i) => console.log(`${i + 1}.${x}`));
}

solve(["John", "Bob", "Christina", "Ema"])