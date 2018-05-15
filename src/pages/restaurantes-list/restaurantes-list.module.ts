import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RestaurantesListPage } from './restaurantes-list';

@NgModule({
  declarations: [
    RestaurantesListPage,
  ],
  imports: [
    IonicPageModule.forChild(RestaurantesListPage),
  ],
})
export class RestaurantesListPageModule {}
