const data = localStorage.getItem('cartArr');
const items = JSON.parse(data);
console.log(items);

function backToHome() {
    window.location = 'index.html'
}

const div = document.querySelector('#itemsDiv')
const pera = document.querySelector('.pera')

for (let i = 0; i < items.length; i++) {
    div.innerHTML += `<div class="maindiv"><img src="./assets/${items[i].image}" alt="">
    <h1>${items[i].brand} ${items[i].model}</br>
    Quantity:<button class = "operator">-</button>${items[i].quantity}<button class = "operator">+</button></br>
    <span class="price">Price: ${items[i].price}/= pkr</span></br>
    <span class="total-price">Total Price: ${items[i].price * items[i].quantity}/= pkr</span></h1>
    </div>`;
    const grandTotal = items[i].price * items[i].quantity;
    pera.innerHTML = `Grand Total = ${grandTotal}`
}



