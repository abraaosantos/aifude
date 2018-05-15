import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestaurantesServiceProvider } from '../../providers/restaurantes-service/restaurantes-service';
import { Restaurante } from '../../model/restaurante.model';
import { CardapioPage } from '../cardapio/cardapio';

/**
 * Generated class for the RestaurantesListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restaurantes-list',
  templateUrl: 'restaurantes-list.html',
})
export class RestaurantesListPage {

  restaurantes: Array<Restaurante>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private service: RestaurantesServiceProvider) {
  }

  ionViewDidLoad() {
    this.service.getRestaurantes().then(
      (response) => this.restaurantes = response
    )
  }
  
  viewCardapio(event, restauranteSelecionado: Restaurante){
    this.navCtrl.push(CardapioPage, {
      restaurante: restauranteSelecionado
    });
  }

}
