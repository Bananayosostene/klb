const item = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
];

let costs = [];



item.forEach((Element) => {
  costs.push(Element.price);
});
costs.sort((a, b) => a - b);

//   Object of cheapest product

const cheapProduct = item.filter((e) => {
  return e.price === costs[0];
});

console.log(cheapProduct);
//   Object of expensive product

const expensiveProduct = item.filter((e) => {
  return e.price === costs[costs.length - 1];
});
console.log(expensiveProduct);
const Remove10 = item.filter((e) => {
  return e.price !== 10;
});

function add(params) {
  let sum = 0;
  params.forEach((e) => {
    sum += e.price;
  });
  return sum;
}

//   3 Return the total of all prices of product

let totalOfAllProduct = add(item);

console.log(totalOfAllProduct);
//   3 Return the total of all prices of product except price ten

let totalOfPriceOfProductNotTen = add(Remove10);

console.log(totalOfPriceOfProductNotTen);