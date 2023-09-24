const data = localStorage.getItem('cartArr');
const items = JSON.parse(data);
console.log(items);

function backToHome() {
    window.location = 'index.html'
}

const div = document.querySelector('#itemsDiv')
const pera = document.querySelector('.pera')


function render() {
    for (let i = 0; i < items.length; i++) {
        div.innerHTML += `<div class="maindiv"><img src="./assets/${items[i].image}" alt="">
        <h1>${items[i].brand} ${items[i].model}</br>
        Quantity:<button class = "operator" onclick = "sumValue(${i})">-</button>${items[i].quantity}<button class = "operator" onclick="addValue(${i})">+</button></br>
        <span class="price">Price: ${items[i].price}/= pkr</span></br>
        <span class="total-price">Total Price: ${items[i].price * items[i].quantity}/= pkr</span></h1>
        </div>`;
        const grandTotal = items[i].price * items[i].quantity;
        pera.innerHTML = `Grand Total = ${grandTotal}`
    }
    
}

render()



function addValue(index) {
    div.innerHTML = "";
    items[index].quantity += 1;

    render()
}

function sumValue(index) {
    div.innerHTML = "";
    items[index].quantity -= 1;

    render()
    if (items[index].quantity === 0){
        div.innerHTML = "";
        items.splice(index , 1)
        render();
    }
      

}

