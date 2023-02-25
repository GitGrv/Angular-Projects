export class FoodService {
  Foods: object[] = [
    {
      name: 'Broccoli',
      img: '../../../assets/images/broccoli.jpg',
      calories: 100,
    },
    {
      name: 'Chicken',
      img: '../../../assets/images/chicken.jpeg',
      calories: 200,
    },
    {
      name: 'Apple',
      img: '../../../assets/images/apple.jpg',
      calories: 40,
    },
    {
      name: 'Banana',
      img: '../../../assets/images/banana.jpeg',
      calories: 70,
    },
  ];

  searchFood: string = '';
  data: any;
  addDataToFoodArray() {
    this.Foods.push(this.data);
  }
  todaysFoodList: {
    name: string;
    calories: number;
    updatedCalories: number;
    numberOfFoodItem:number;
  }[] = [];
  todaysFoodListItemName: string;
  todaysFoodListItemCalories: number;
  todaysFoodListItemNumberOfFoodItem: number;
  todaysFoodListUpdatedCalories: number;
  itemAlreadyInArray: boolean;
  map = new Map<string, number>();
  x: number;
  sum: number;
  addFoodInTodaysFoodList() {
    
    this.itemAlreadyInArray = false;
    for (let i = 0; i < this.todaysFoodList.length; i++) {
      if (this.todaysFoodList[i].name == this.todaysFoodListItemName) {
        this.itemAlreadyInArray = true;
        break;
      }
    }
    if (!this.itemAlreadyInArray) {
      this.todaysFoodList.push({
        name: this.todaysFoodListItemName,
        calories: this.todaysFoodListItemCalories,
        updatedCalories: this.todaysFoodListUpdatedCalories * this.todaysFoodListItemNumberOfFoodItem,
        numberOfFoodItem:this.todaysFoodListItemNumberOfFoodItem,
      });
      for(let i=0;i<this.todaysFoodList.length;i++){
        this.x = this.todaysFoodList[i].calories * this.todaysFoodListItemNumberOfFoodItem;
      }
      
    } else {
      for (let i = 0; i < this.todaysFoodList.length; i++) {
        if (this.todaysFoodList[i].name == this.todaysFoodListItemName) {
          this.todaysFoodList[i].numberOfFoodItem=this.todaysFoodListItemNumberOfFoodItem  
          this.todaysFoodList[i].updatedCalories =
            this.todaysFoodList[i].calories * this.todaysFoodListItemNumberOfFoodItem;
          this.x = this.todaysFoodList[i].updatedCalories;
          break;
        }
      }
    }
    
    this.map.set(this.todaysFoodListItemName, this.x);
    this.sum = 0;
    this.map.forEach((item) => {
      this.sum += item;
    });  
  }
}
