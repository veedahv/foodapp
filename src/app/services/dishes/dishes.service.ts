import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DishesService {

  url = environment.apiUrl

  constructor(private http: HttpClient) { }

  searchDish(name) {
    // www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
    return this.http.get(`${this.url}/search.php?s=${name}`);
  }
  getDishById(id) {
    return this.http.get(`${this.url}/lookup.php?i=${id}`);
  }
  getDishByCategory(category) {

    // www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
    return this.http.get(`${this.url}/filter.php?c=${category}`);
  }
  getDishByArea(area) {

    // www.themealdb.com/api/json/v1/1/filter.php?a=American
    return this.http.get(`${this.url}/filter.php?a=${area}`);
  }
  getAllCategories() {
    // www.themealdb.com/api/json/v1/1/categories.php

    return this.http.get(`${this.url}/categories.php`);
  }
  getCategoryNames() {

    // www.themealdb.com/api/json/v1/1/list.php?c=list

    return this.http.get(`${this.url}/list.php?c=list`);
  }

}
