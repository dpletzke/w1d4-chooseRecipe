//StretchKata10
//for lighthouse labs prep modules
// return a recipe that has one ingredient from each bakery
//generalized the prompt to allow for any number of bakeries and ingredients


const chooseRecipe = (bakeryObj, recipesList) => {
  const bakeriesArr = Object.values(bakeryObj);

  for (const { name, ingredients } of recipesList) {
    /* Shallow copy used to remove bakeries when they are used in a recipe */
    const bakeriesLeftArr = [...bakeriesArr];

    for (const ingredient of ingredients) {
        
      for (let i = 0; i < bakeriesLeftArr.length; i++) {
        if (bakeriesLeftArr[i].includes(ingredient)) {
          bakeriesLeftArr.splice(i, 1);
          break;
        }
      }
     
    }

    if (bakeriesLeftArr.length === 0) {
      return name;
    }
    
  }

};

let bakeries = {
  A: ['saffron',
    'eggs',
    'tomato paste',
    'coconut',
    'custard'],
  B: ['milk', 'butter', 'cream cheese'],
  C: ['steamed hams', 'steamed clams']
};
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base', 'socks']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese', 'steamed hams']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef', 'crushed surprise']
  }
];

console.log(chooseRecipe(bakeries, recipes));

let recipes2 = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base', 'shoes']
  },
  {
    name: 'Persian Cheesecake v2.0',
    ingredients: ['butter', 'eggs', 'steamed clams']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef', 'crushed surprise']
  }
];

console.log(chooseRecipe(bakeries, recipes2));