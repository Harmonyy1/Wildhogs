let vagn = [
    { name: "merch1", price: 10, quantity: onclick("merchButton1") },
    { name: "merch2", price: 5, quantity: 3 },
    {name: "merch3", price: 4, quantity: 4}
  ];
  
  let total = 0;
  
  for(let item of cart) {
    total += item.price * item.quantity;
  }