import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomNavComponent } from '../../dashboard/components/bottom-nav/bottom-nav.component';
import { DishCardComponent } from '../../dashboard/components/dish-card/dish-card.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HomeDishCardComponent } from '../../dashboard/components/home-dish-card/home-dish-card.component';



@NgModule({
  declarations: [
    BottomNavComponent,
    DishCardComponent,
    HomeDishCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    BottomNavComponent,
    DishCardComponent,
    HomeDishCardComponent
  ]
})
export class ComponentsModule { }
