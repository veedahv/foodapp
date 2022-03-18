import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
// import { DishesService } from 'src/app/services/dishes/dishes.service';
import { DishDetailComponent } from '../../modals/dish-detail/dish-detail.component';

@Component({
  selector: 'app-dish-card',
  templateUrl: './dish-card.component.html',
  styleUrls: ['./dish-card.component.scss'],
})
export class DishCardComponent implements OnInit {

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
