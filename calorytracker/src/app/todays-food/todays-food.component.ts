import { Component,DoCheck,OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-todays-food',
  templateUrl: './todays-food.component.html',
  styleUrls: ['./todays-food.component.css']
})
export class TodaysFoodComponent implements OnInit,DoCheck {
  constructor(private foodService:FoodService){}

  todaysFoodList:{name:string,calories:number,updatedCalories:number,numberOfFoodItem:number}[]=[];
  totalCalories:number=0;
  ngOnInit(): void {
    this.todaysFoodList=this.foodService.todaysFoodList;
  }
  ngDoCheck(): void {   
   this.totalCalories=this.foodService.sum;
  }
}