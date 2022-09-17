function solve(speed, area) {

    let areaSpeedLimit;
    switch (area){
        case 'motorway': areaSpeedLimit = 130;
        break;
        case 'interstate': areaSpeedLimit = 90;
        break;
        case 'city': areaSpeedLimit = 50;
        break;
        case 'residential': areaSpeedLimit = 20;
        break;
    }

    let driverSpeed = Number(speed);

    if (driverSpeed <= areaSpeedLimit) {
        console.log(`Driving ${driverSpeed} km/h in a ${areaSpeedLimit} zone`);
    }else{

        let difference = driverSpeed - areaSpeedLimit;

        let status;

        if (difference <= 20) {
            status = 'speeding';
        }else if(difference <=40){
            status = 'excessive speeding';
        }else{
            status = 'reckless driving';
        }

        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${areaSpeedLimit} - ${status}`);
    }
}

solve(40, 'city');