import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFoodListComponent } from './app-food-list.component';

describe('AppFoodListComponent', () => {
  let component: AppFoodListComponent;
  let fixture: ComponentFixture<AppFoodListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppFoodListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppFoodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
