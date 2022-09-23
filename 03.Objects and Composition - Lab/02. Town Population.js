function solve(array){
let townData = array.map(el => {
    let data = el.split(' <-> ');
    return{
        name: data[0],
        population: Number(data[1])
    };
});
let result = {};
for(let town of townData){
    if(result[town.name] === undefined){
        result[town.name] = town.population;
    }
    else{
        result[town.name] += town.population;
    }
}
for(let town in result){
    console.log(`${town} : ${result[town]}`);
}
}

solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000'])