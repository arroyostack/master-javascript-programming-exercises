let currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 },
    ],
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 },
    ],
  },
];

const renderAverageCostPerDesigner = inventory => { 
  let designerPrices = [];
  for (let i = 0; i < inventory.length; i++) {
      let totalPrice = 0; 
      let averagePrice = 0; 
      let designerName = inventory[i].name; 
      for (let j = 0; j < inventory[i].shoes.length; j++) {
          totalPrice += inventory[i].shoes[j].price;  
      }
      averagePrice = totalPrice / inventory[i].shoes.length; 
      designerPrices.push({name: designerName, averagePrice: averagePrice});
  }
  return designerPrices; 
}
