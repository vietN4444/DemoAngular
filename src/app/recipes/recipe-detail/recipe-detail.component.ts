import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipeWasChoose: Recipe;
  eleMenuDropdown: Element;
  statusMenu: boolean = false;
  id: number;

  // Click outside dropdown to remove "show"
  @HostListener('document:click', ['$event']) toggleDown() {
    if (this.statusMenu === true) {
      this.eleMenuDropdown.classList.remove('show');
      this.statusMenu = false;
    }
  }

  constructor(
    private recipeService: RecipeService,
    private routes: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.routes.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipeWasChoose = this.recipeService.getRecipe(this.id);
    });
  }

  onDropdown(e, eleRef: Element) {
    e.stopPropagation();
    eleRef.classList.toggle('show');
    this.eleMenuDropdown = eleRef;
    this.statusMenu = !this.statusMenu;
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(
      this.recipeWasChoose.ingredients
    );
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.routes });
    // this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.routes });
  }
}
