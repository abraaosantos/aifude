import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestaurantesServiceProvider } from '../providers/restaurantes-service/restaurantes-service';
import { RestaurantesListPage } from '../pages/restaurantes-list/restaurantes-list';
import { HttpClientModule } from '@angular/common/http';
import { CardapioPage } from '../pages/cardapio/cardapio';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    RestaurantesListPage,
    CardapioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    RestaurantesListPage,
    CardapioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestaurantesServiceProvider
  ]
})
export class AppModule {}
