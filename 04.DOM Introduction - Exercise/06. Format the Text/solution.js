function solve() {
  let text = document.getElementById("input").value;
  let result = document.getElementById("output");
  result.innerHTML = "";
  let textArray = text.split(".").filter(x => x.length > 0);

  for (let i = 0; i < textArray.length; i += 3) {
    let res = [];
    for (let j = 0; j < 3; j++) {
      if (textArray[i + j]) {
        res.push(textArray[i + j]);
      }
    }
    let output = res.join(". ") + "."
    result.innerHTML += `<p>${output}</p>`
  }
}