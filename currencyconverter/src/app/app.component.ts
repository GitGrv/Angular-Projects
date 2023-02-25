import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'currencyconverter';
  reactiveForm: FormGroup;
  amt:number=0;
  cF:string="";
  cT:string="";
  ngOnInit(){
    this.reactiveForm =new FormGroup({
      amount: new FormControl(null,Validators.required),
      currencyFrom :new FormControl(null,Validators.required),
      currencyTo :new FormControl(null,Validators.required)
    })
   
  }

  showResult(){
    this.amt=this.reactiveForm.get('amount').value;
    this.cF=this.reactiveForm.get('currencyFrom').value;
    this.cT=this.reactiveForm.get('currencyTo').value;
  }
}
