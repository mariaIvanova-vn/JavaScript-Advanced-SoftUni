function attachEventsListeners() {
    let buttonConvert = document.getElementById('convert');
    buttonConvert.addEventListener('click', (event) => {
        let fromValue=document.getElementById('inputUnits').value;
        let outValue=document.getElementById('outputUnits').value;
        
        let inputDistance=Number(document.getElementById('inputDistance').value);
        let outputDistance=document.getElementById('outputDistance');  // вземаме полето

        let valueInMeters=inputDistance*metricUnits[fromValue];  //1 km cm => 1* 1000 => 
        let convertedValue=valueInMeters/metricUnits[outValue];   //  => 1000/0.01
        outputDistance.value=convertedValue;
    });
    let metricUnits = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    };
}