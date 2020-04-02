import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('test recipe', 'test description', 'https://res.cloudinary.com/grohealth/image/upload/v1583764330/DCUK/Content/iStock-680111050.jpg')
   ]

  constructor() { }

  ngOnInit(): void {
  }

}
