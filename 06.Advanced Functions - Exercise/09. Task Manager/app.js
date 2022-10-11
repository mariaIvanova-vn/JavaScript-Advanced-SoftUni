function solve() {
    document.getElementsByTagName('form')[0].addEventListener('submit', createTask);
    let sections = document.getElementsByTagName('section');
    let openSection = sections[1];
    let inProgressSection = sections[2];
    let completeSections = sections[3];

    function createTask(event) {
        event.preventDefault();
        let form = event.target;
        let task = form.elements[0].value;
        let description = form.elements[1].value;
        let date = form.elements[2].value;
        debugger
    }
}