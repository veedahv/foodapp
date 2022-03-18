import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchPageComponent } from './search-page/search-page.component';
import { ComponentsModule } from 'src/app/modules/shared/components/components.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    ComponentsModule,
    FormsModule
  ]
})
export class SearchModule { }
