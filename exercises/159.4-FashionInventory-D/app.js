let inventory = [
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

const getLaceNameDataForShoes = (inventory) => { 
  let laceNameData = [];

  //Loop through each item in the inventory
  inventory.forEach(item => {
    item.shoes.forEach(shoe => {
      if (shoe.name.includes('lace') || shoe.name.includes('laced')) {     
        let words = shoe.name.split(' '); 
        
        for (let i=0; i< words.length; i++) {
          if (words[i].includes('lace') || words[i].includes('laced')) {
            laceNameData.push({nameWords: words, targetWordIndex: i});
          }
        }
      }
    });
  });
  return laceNameData;
}
