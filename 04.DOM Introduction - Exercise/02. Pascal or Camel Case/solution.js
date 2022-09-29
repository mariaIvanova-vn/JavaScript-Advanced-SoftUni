function solve() {
  let text = document.getElementById("text").value;
  let convention = document.getElementById("naming-convention").value;
  let textArray = text.split(" ");
  let result = "";

  if (convention === "Camel Case") {
    textArray.forEach((e, i) => {
      if (i === 0) {
        return result += e.toLowerCase();
      }
      return result += e[0].toUpperCase() + e.substring(1).toLowerCase();
    })
  } else if (convention === "Pascal Case") {
    textArray.forEach((a, b) => {
      a = a.toLowerCase();
      result += a[0].toUpperCase() + a.substring(1)
    })
  } else {
    result = "Error!";
  }

  document.getElementById("result").textContent = result;
}