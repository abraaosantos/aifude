import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Produto } from '../../model/produto.model';
import { Restaurante } from '../../model/restaurante.model';

/**
 * Generated class for the CardapioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cardapio',
  templateUrl: 'cardapio.html',
})
export class CardapioPage {

  restaurante: Restaurante;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
    this.restaurante = navParams.get('restaurante');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardapioPage');
  }

  addToCart(event, produto: Produto) {
    let toast = this.toastCtrl.create({
      message: `Produto ${produto.nomeProduto} adicionado ao carrinho!`,
      duration: 3000,
      position: 'bottom'
    });
  
    toast.present();

  }
  

}
