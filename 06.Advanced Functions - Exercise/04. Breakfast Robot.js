function solve() {
    let store = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }
    let libraryOfRecipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }

    function restock(element, quantity) {
        store[element] += Number(quantity);
        return `Success`;
    }

    function prepare(recipe, quantity) {
        let remainingStore = {};
        
        for (let el in libraryOfRecipes[recipe]) {
            let remaining = store[el] - libraryOfRecipes[recipe][el] * quantity;
            if (remaining < 0) {
                return `Error: not enough ${el} in stock`
            } else {
                remainingStore[el] = remaining;
            }
        }
        Object.assign(store, remainingStore);
        return `Success`;
    }
    function report() {
        return `protein=${store.protein} carbohydrate=${store.carbohydrate} fat=${store.fat} flavour=${store.flavour}`
    }
    function output(str) {
        let [command, item, qty] = str.split(" ");
        if (command == 'restock') {
            return restock(item, Number(qty));
        } else if (command == 'prepare') {
            return prepare(item, Number(qty));
        }
        else if (command == 'report') {
            return report();
        }
    }
    return output;
}



let manager = solve();
console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
