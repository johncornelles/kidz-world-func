const contents = document.querySelectorAll('.container div div h3');
const costs = document.querySelectorAll('.buy p');
const cartitems = document.querySelector('#cart-value');
const list = [];
let totalcost = 0;
let nos = 0;

function calc(e) {
  const name = contents[e].textContent;
  const costText = costs[e].textContent.replace('$', '');
  const co = parseFloat(costText);
  const exist = list.find((item) => item.name === name);

  if (exist) {
    exist.quantity += 1;
  } else {
    list.push({ name, co, quantity: 1 });
  }
  totalcost += co;
  nos += 1;
  cartitems.textContent = nos;
}

const cart = document.querySelector('#cart');
cart.onclick = () => {
  console.clear();
  for (let i = 0; i < list.length; i++) {
    console.log(`Item name: ${list[i].name} - Quantity: ${list[i].quantity}`);
  }

  const dollars = Math.floor(totalcost);
  const cents = Math.round((totalcost - dollars) * 100);
  console.log(`The total amount is ${dollars}$ dollars and ${cents} cents`);
};