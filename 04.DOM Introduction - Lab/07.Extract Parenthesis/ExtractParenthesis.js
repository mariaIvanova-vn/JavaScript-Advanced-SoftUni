function extract(content) {
    let element = document.getElementById(content).textContent;

    let pattern = /\(([^)]+)\)/g;

    let result = element.matchAll(pattern);
    let matches = [];
    for (let el of result) {
        matches.push(el[1]);
    }

    return matches.join('; ');
}