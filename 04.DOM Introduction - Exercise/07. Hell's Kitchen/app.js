function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let input = JSON.parse(document.querySelector('#inputs textarea').value);
      let allRestaurants = {};
      let bestAvgSalary = 0;
      let bestRestaurantName = '';

      for (let data of input) {
         let [restaurantName, workers] = data.split(' - ');
         let worker = workers.split(', ');

         for (let w of worker) {
            let [name, salary] = w.split(' ');

            if (!allRestaurants.hasOwnProperty(restaurantName)) {
               allRestaurants[restaurantName] = {};
            }
            allRestaurants[restaurantName][name] = Number(salary);
            console.log(allRestaurants);
         }
         let entries = Object.entries(allRestaurants);

         for (let [name, workers] of entries) {
            let salaries = Object.values(workers);
            let totalSalariesPaid = 0;

            for (let salary of salaries) {
               totalSalariesPaid += salary;
            }

            let averageSalary = totalSalariesPaid / salaries.length;

            if (averageSalary > bestAvgSalary) {
               bestAvgSalary = averageSalary;
               bestRestaurantName = name;
            }
         }
      }
      let workersOrdered = Object.entries(allRestaurants[bestRestaurantName]).sort((a, b) => b[1] - a[1]);
      let workersAsString = '';
      workersOrdered.forEach(w => workersAsString += `Name: ${w[0]} With Salary: ${w[1]} `);

      document.querySelector('#bestRestaurant p').textContent = `Name: ${bestRestaurantName} Average Salary: ${bestAverageSalary.toFixed(2)} Best Salary: ${workersOrdered[0][1].toFixed(2)}`;
      document.querySelector('#workers p').textContent = workersAsString;
   }
}