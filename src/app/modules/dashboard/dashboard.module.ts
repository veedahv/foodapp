import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { DashbaordLayoutComponent } from './dashbaord-layout/dashbaord-layout.component';


@NgModule({
  declarations: [
    DashbaordLayoutComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    IonicModule,
    RouterModule
  ]
})
export class DashboardModule { }
