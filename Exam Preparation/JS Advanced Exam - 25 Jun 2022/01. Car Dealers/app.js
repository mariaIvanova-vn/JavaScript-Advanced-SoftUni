window.addEventListener("load", solve);

function solve() {
  let totalProfit=0;

  const input = {
    make: document.getElementById('make'),
    model: document.getElementById('model'),
    year: document.getElementById('year'),
    fuelType: document.getElementById('fuel'),
    originalCost: document.getElementById('original-cost'),
    sellingPrice: document.getElementById('selling-price')
  };

  let tableBody = document.getElementById('table-body');
  let carsList = document.getElementById('cars-list');
  let profit = document.querySelector('#profit');

  let publishButton = document.getElementById('publish');
  publishButton.addEventListener('click', (event) => {
    event.preventDefault();

    let make = input.make.value;
    let model = input.model.value;
    let year = input.year.value;
    let fuelType = input.fuelType.value;
    let originalCost = input.originalCost.value;
    let sellingPrice = input.sellingPrice.value;

    if (make == '' || model == '' || year == '' || fuelType == '' || originalCost == '' || sellingPrice == '' || originalCost>sellingPrice) {
      return;
    }



    let tr = document.createElement('tr');
    tr.className = "row";
    tr.innerHTML = ` <td>${make}</td>
    <td>${model}</td>
    <td>${year}</td>
    <td>${fuelType}</td>
    <td>${originalCost}</td>
    <td>${sellingPrice}</td>
    <td>
      <button class="action-btn edit">Edit</button>
      <button class="action-btn sell">Sell</button>
    </td>`

  
    tableBody.appendChild(tr);
    
        input.make.value = '';
        input.model.value = '';
        input.year.value = '';
        input.fuelType.value = '';
        input.originalCost.value = '';
        input.sellingPrice.value = '';

    const editBtn = tr.querySelector('.edit');
    editBtn.addEventListener('click', () => {
      input.make.value = make;
      input.model.value = model;
      input.year.value = year;
      input.fuelType.value = fuelType;
      input.originalCost.value = originalCost;
      input.sellingPrice.value = sellingPrice;
      tr.remove();
    });

    const sellBtn = tr.querySelector('.sell');
    sellBtn.addEventListener('click', () => {
      tableBody.remove();
      
      editBtn.remove();
      sellBtn.remove();

      let currProfit=sellingPrice-originalCost;

      let li = document.createElement('li');
      li.className = 'each-list';
      li.innerHTML = `<span>${make} ${model}</span>
      <span>${year}</span>
      <span>${currProfit}</span>`

      carsList.appendChild(li);
      totalProfit+=currProfit;

      profit.textContent = totalProfit.toFixed(2);
      profit.style.fontWeight = "strong";
    })
    
  });
}
