import { Component, OnInit } from '@angular/core';
import { DishesService } from 'src/app/services/dishes/dishes.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {

  allCategories: any = [];
  categoryNames: any = [];
  filteredMeals: any = [];
  searchInput: string = '';

  constructor(private dishService: DishesService) { }

  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories() {
    this.dishService.getAllCategories().subscribe((data: any) => {
      console.log(data);
      this.allCategories = data.categories;
      console.log(this.allCategories);
      
    })
  }
  getCategoryNames() {
    this.dishService.getCategoryNames().subscribe((data: any) => {
      console.log(data);
      // this.allCategories = data.categories;
      // console.log(this.allCategories);
      
    })
  }
  filterByCategory(category: string) {
    this.dishService.getDishByCategory(category).subscribe((data: any) => {
      console.log(data);
      this.filteredMeals = data.meals;
      console.log(this.filteredMeals);
      
    })
  }
  filterBySearch() {
    if (this.searchInput === '') {
      this.filteredMeals = [];
      return;
    }
    this.dishService.searchDish(this.searchInput).subscribe((data: any) => {
      console.log(data);
      if (data.meals === null) {
        console.log('Match not foud');
      } else {
        this.filteredMeals = data.meals;
        console.log(this.filteredMeals);
      }
      
    })
  }

}
