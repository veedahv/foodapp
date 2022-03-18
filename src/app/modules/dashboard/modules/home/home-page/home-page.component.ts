import { Component, OnInit } from '@angular/core';
import { DishesService } from 'src/app/services/dishes/dishes.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {

  popularOrders: any = []

  constructor(private dishService: DishesService) { }

  ngOnInit() {
    this.getPopularOrders();
  }

  getPopularOrders() {
    this.dishService.getDishByArea('american').subscribe((data: any) => {
      console.log(data.meals);
      let allMeals = data.meals;
      this.popularOrders = allMeals.splice(0, 8);
      console.log(this.popularOrders);
      
    })
  }

}
