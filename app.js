var contents = document.querySelectorAll('.container div div h3');
var costs = document.querySelectorAll('.buy p');
var cartitems = document.querySelector('#cart-value');
var list = [];
var totalcost = 0;
var nos = 0;

function calc(e) {
  let name = contents[e].textContent;
  let costText = costs[e].textContent.replace('$', '');
  let co = parseFloat(costText);
  let exist = list.find((item) => item.name === name);

  if (exist) exist.quantity += 1;
  else list.push({ name, co, quantity: 1 });
  totalcost += co;
  nos += 1;
  cartitems.textContent = nos;
}

const cart = document.querySelector('#cart img');
cart.onclick = () => {
  console.clear()
  for (let i = 0; i < list.length; i++) {
    console.log(`Item name: ${list[i].name} - Quantity: ${list[i].quantity}`);
  }

  let dollars = Math.floor(totalcost);
  let cents = Math.round((totalcost - dollars) * 100);
  console.log(`The total amount is ${dollars}$ dollars and ${cents} cents`);
};
