let inventory = [
    {
      name: 'Brunello Cucinelli',
      shoes: [
        {name: 'tasselled black low-top lace-up', price: 1000},
        {name: 'tasselled green low-top lace-up', price: 1100},
        {name: 'plain beige suede moccasin', price: 950},
        {name: 'plain olive suede moccasin', price: 1050}
      ]
    },
    {
      name: 'Gucci',
      shoes: [
        {name: 'red leather laced sneakers', price: 800},
        {name: 'black leather laced sneakers', price: 900}
      ]
    }
  ];

  const renderInventory = (inventory) => {
    const inventoryWithBlackShoes = inventory.map((store) => {
       return store.shoes.filter((shoe) => {
          if (shoe.name.includes('black')) {
             return store;
          }
       });
    });
 
    const flatInventory = inventoryWithBlackShoes.flat();
 
    return flatInventory.map((data) => [data.name, data.price]);
 };

 //WORKING, HOWEVER TEST DID NOT PASS
