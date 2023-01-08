import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe-book.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor() {

    const recipes: Recipe[] = [
      new Recipe('Paneer', 'Paneer Masala', 'https://i.pinimg.com/736x/fb/f7/be/fbf7be59247865496a6670d365a6a373--indian-vegetarian-recipes-indian-recipes.jpg'),
      new Recipe('Snacks', 'Masala Dosa', 'https://i.pinimg.com/originals/08/ec/59/08ec59099b92f7fb870cd83e85f78d0e.jpg')
    ]

    const food = [];


  }

  ngOnInit() {
  }

}
