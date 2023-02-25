import { Component, DoCheck, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FoodService } from '../services/food.service';
@Component({
  selector: 'app-app-food-list',
  templateUrl: './app-food-list.component.html',
  styleUrls: ['./app-food-list.component.css'],
})
export class AppFoodListComponent implements OnInit, DoCheck {
  constructor(private foodService: FoodService) {}

  listOfFoods: object[] = [];
  searchFoodInList: string = '';
  foodNumbers: FormGroup;

  ngOnInit() {
    this.listOfFoods = this.foodService.Foods;
    this.foodNumbers = new FormGroup({
      numberOfFoodItem: new FormControl(null),
    });
  }
  ngDoCheck(): void {
    this.searchFoodInList = this.foodService.searchFood;
  }
  addFoodToTodaysList(food) {
    if (this.foodNumbers.get('numberOfFoodItem').value < 1)
      alert("Number of Food Item Can't be less than one");
    else {
      this.foodService.todaysFoodListItemName = food.name;
      this.foodService.todaysFoodListItemCalories = food.calories;
      this.foodService.todaysFoodListUpdatedCalories=food.calories;
      this.foodService.todaysFoodListItemNumberOfFoodItem= this.foodNumbers.get('numberOfFoodItem').value;
      this.foodService.addFoodInTodaysFoodList();
      this.foodNumbers.reset();
      
    }
  }
}
