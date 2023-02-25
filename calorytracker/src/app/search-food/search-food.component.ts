import { Component, AfterContentInit, OnInit, DoCheck } from '@angular/core';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-search-food',
  templateUrl: './search-food.component.html',
  styleUrls: ['./search-food.component.css']
})
export class SearchFoodComponent implements OnInit,DoCheck {
  constructor(private foodService:FoodService){}
  searchInInput:string = '';
  ngOnInit(){
    
    }
    ngDoCheck(){
      this.foodService.searchFood=this.searchInInput;
    }
    

}
