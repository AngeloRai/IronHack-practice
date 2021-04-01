class Cook {
  constructor(ingredients, ingredientPreparation) {
    this.ingredients = ingredients;
    this.ingredientPreparation = ingredientPreparation;
    this.cookedIngredients = [];
  }
  
  dice(ingredient) {
    return 'diced' + ingredient;
  }
  
  slice(ingredient) {
    return 'sliced' + ingredient;
  }
  
  sear(ingredient) {
    return 'seared' + ingredient;
  }
  
  boil(ingredient) {
    return 'boiled ' + ingredient;
  }
  
  pour(ingredient) {
    return 'poured ' + ingredient;
  }
  
  cook() {
    this.ingredients.map((ingredient) => {
      switch (this.ingredientPreparation[ingredient]) {
        case 'boil':
       return this.cookedIngredients.push(this.boil(ingredient));
        case 'pour':
       return this.cookedIngredients.push(this.pour(ingredient));
      }
    })
  }
}

const mashedPotatoes = new Cook(
  ['potatoes', 'butter', 'milk', 'salt'], 
  {potatoes: 'boil', butter: 'pour'}
  )

mashedPotatoes.cook();

console.log(mashedPotatoes.cookedIngredients);