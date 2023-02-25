import { Component,OnInit } from '@angular/core';
import { FormGroup, Validators,FormControl } from '@angular/forms';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-add-new-food',
  templateUrl: './add-new-food.component.html',
  styleUrls: ['./add-new-food.component.css']
})
export class AddNewFoodComponent implements OnInit {
  formData: FormGroup;
  display: boolean = false;
  constructor(private foodService:FoodService){}
  ngOnInit(){
    this.formData=new FormGroup({
      name: new FormControl(null,Validators.required),
      img: new FormControl(null,Validators.required),
      calories: new FormControl(null,Validators.required)
    })
  }

  addFood(){
    this.display=true;
  }
  close(){
    this.display=false;
  }
  onSubmit(){
    if(this.formData.valid){
      this.display=false;
      this.foodService.data=this.formData.value;
      this.foodService.addDataToFoodArray();
      this.formData.reset();
    }else{
      alert("Please fill all the required fields");
    }
  }
}
