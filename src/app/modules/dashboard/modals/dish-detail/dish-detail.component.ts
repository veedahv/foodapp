import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DishesService } from 'src/app/services/dishes/dishes.service';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss'],
})
export class DishDetailComponent implements OnInit {

  @Input() dishId: number = 0;
  dishInfo: any = {
    idMeal: "",
    strArea: "",
    strCategory: "",
    // strIngredient1: "",
    strMeal: "",
    strMealThumb: "",
    allIngredients: []
  };

  constructor(public modalController: ModalController, private dishService: DishesService) { }

  ngOnInit() {
    console.log(this.dishId);
    this.getDish();

  }

  getDish() {
    this.dishService.getDishById(this.dishId).subscribe((data: any) => {
      // console.log(data);
      let dishInfo = data.meals[0];
      console.log(dishInfo);
      let allIngredients = [];
      
      for (const property in dishInfo) {
        // console.log(`${property}: ${this.dishInfo[property]}`);
        if (property.includes('strIngredient')) {
          // console.log(property);
          if (dishInfo[property] !== '') {
            allIngredients.push(dishInfo[property])
            
          }
          // delete this.dishInfo[property];
          console.log(allIngredients);
          this.dishInfo.allIngredients = allIngredients
          
        }
      }

      for (const key in this.dishInfo) {
        if (dishInfo[key]) {
          this.dishInfo[key] = dishInfo[key];
        }
      }
      // for (const property in this.dishInfo) {
      //   // console.log(`${property}: ${this.dishInfo[property]}`);
      //   if (property.includes('strMeasure')) {
      //     console.log(property);
      //  delete this.dishInfo[property];
          
      //   }
      // }
      // this.dishInfo = {...this.dishInfo, allIngredients}
      console.log(this.dishInfo);

    })
  }

}
