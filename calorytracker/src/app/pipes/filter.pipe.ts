import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, sName:string): any {
    if(sName=="") return value;
    const foodsArray:any[]=[];
    for(let i=0;i<value.length;i++){
      let foodName:string=value[i].name;
      foodName=foodName.toLowerCase();
      if(foodName.startsWith(sName)){
        foodsArray.push(value[i]);
      }
    }
    return foodsArray;
}
}
