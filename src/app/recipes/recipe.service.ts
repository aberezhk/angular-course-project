import {RecipeModel} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {IngredientModel} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  // recipeSelected = new EventEmitter<RecipeModel>();

  private recipes: RecipeModel[] = [
    new RecipeModel(
      'Summer rolls',
      'Super testy fresh rice rolls',
      'https://live.staticflickr.com/1932/45603471972_65a0e37bd8_b.jpg',
      [
        {name: 'Mint', amount: 2},
        {name: 'Rice paper', amount: 10},
        {name: 'Cucumber', amount: 1}
      ]),
    new RecipeModel(
      'Whale on a cob',
      'The most beloved ever',
      'https://res.cloudinary.com/teepublic/image/private/s--DmbOnEnV--/t_Preview/b_rgb:c8e0ec,c_lpad,f_jpg,h_630,q_90,w_1200/v1484995927/production/designs/1129672_1.jpg',
      [
        {name: 'Whale', amount: 1},
        {name: 'Cucumber', amount: 1},
        {name: 'Handcuffs', amount: 2},
      ])
  ];

  constructor(private slService: ShoppingListService) {

  }

  public getRecipes() {
    return this.recipes.slice();
  }

  public getRecipe(id: number) {
    return this.recipes[id];
  }

  public addIngredientsToShoppingList(ingredients: IngredientModel[]) {
    this.slService.addIngredients(ingredients);
  }
}
