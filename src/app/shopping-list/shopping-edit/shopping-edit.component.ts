import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  // With ViewChild
  // @ViewChild('nameInput', { static: false }) nameInputEle: ElementRef;
  // @ViewChild('amountInput', { static: false }) amountInputEle: ElementRef;
  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {}

  addItem(name: string, amount: number) {
    let ingredientAdd = new Ingredient(name, amount);
    this.slService.addIngredient(ingredientAdd);
  }

  // With ViewChild
  // addItem() {
  //   const name = this.nameInputEle.nativeElement.value;
  //   const amount = this.amountInputEle.nativeElement.value;
  //   const ingredientAdd = new Ingredient(name, amount);
  //   this.newIngredient.emit(ingredientAdd);
  // }
}
