function JuiceFlavors(array) {
    let juices = {};
    let bottles = {};

    function createBottle(flavor) {
        if (juices[flavor] >= 1000) {
            if (!bottles.hasOwnProperty(flavor)) {
                bottles[flavor] = 0;
            }
            let numOfBottles = Math.floor(juices[flavor] / 1000);
            bottles[flavor] += numOfBottles;
            juices[flavor] -= numOfBottles * 1000;
        }
    }

    for (let juice of array) {
        let [flavor, qty] = juice.split(' => ');

        if (!juices.hasOwnProperty(flavor)) {
            juices[flavor] = 0;
        }
        juices[flavor] += Number(qty);
        createBottle(flavor);
    }
    for (let key in bottles) {
        console.log(key + ' => ' + bottles[key]);
    }
}

JuiceFlavors(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549'])