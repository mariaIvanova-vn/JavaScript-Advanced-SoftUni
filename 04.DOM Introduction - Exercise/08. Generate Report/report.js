function generateReport() {
    let checkedIndexes = [];
    let checkedBoxes = document.querySelectorAll("input");
    let checkedBoxesArr = Array.from(checkedBoxes);

    checkedBoxesArr.forEach((el, index) => {
        if (el.checked) {
            checkedIndexes.push(index);
        }
    });

    for (let i = 0; i < checkedBoxes.length; i++) {
        let el = checkedBoxes[i];
        if (el.checked) {
            checkedIndexes.push(i);
        }
    }

    let result = [];
    let rowses = document.querySelectorAll("tbody tr");
    let rows = Array.from(rowses);

    for (let row of rows) {
        let obj = {};

        for (let index of checkedIndexes) {
            let name = checkedBoxes[index].name;
            let info = row.children[index].textContent;
            obj[name] = info;
        }
        result.push(obj);
    }
    let output = JSON.stringify(result);
    let outputEl = document.getElementById("output");
    outputEl.textContent = output;
}