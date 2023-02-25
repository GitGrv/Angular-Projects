import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppFoodListComponent } from './app-food-list/app-food-list.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FoodService } from './services/food.service';
import { SearchFoodComponent } from './search-food/search-food.component';
import { AddNewFoodComponent } from './add-new-food/add-new-food.component';
import { TodaysFoodComponent } from './todays-food/todays-food.component';
@NgModule({
  declarations: [
    AppComponent,
    AppFoodListComponent,
    FilterPipe,
    SearchFoodComponent,
    AddNewFoodComponent,
    TodaysFoodComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
