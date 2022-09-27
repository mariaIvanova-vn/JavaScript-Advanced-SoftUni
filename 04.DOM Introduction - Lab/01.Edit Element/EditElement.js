function editElement(el, match, replacer) {
    let pattern = new RegExp(match, 'g');
    el.textContent = el.textContent.replace(pattern, replacer);
}