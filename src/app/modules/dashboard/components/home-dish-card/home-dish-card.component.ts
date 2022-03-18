import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DishDetailComponent } from '../../modals/dish-detail/dish-detail.component';

@Component({
  selector: 'app-home-dish-card',
  templateUrl: './home-dish-card.component.html',
  styleUrls: ['./home-dish-card.component.scss'],
})
export class HomeDishCardComponent implements OnInit {

  @Input() dish: any = {
    idMeal: 0,
    strMeal: '',
    strMealThumb: ''
  }

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  async showDishDetail() {
    const modal = await this.modalController.create({
      component: DishDetailComponent,
      componentProps: {
        dishId: this.dish.idMeal,
      },
    });

    await modal.present();
  }

}
