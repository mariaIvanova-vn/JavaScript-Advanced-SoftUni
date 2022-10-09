function filterEmployees(input, chriteria) {
    let data = JSON.parse(input);
    let[prop, val] = chriteria.split('-');
    return data.filter(x => x[prop] == val)
    .map((x, i) => `${i}. ${x.first_name} ${x.last_name} - ${x.email}`)
    .forEach(e => console.log(e));
}


filterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female" }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female" },  
    { "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male" }]`, 'gender-Female')