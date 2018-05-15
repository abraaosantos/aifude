import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurante } from '../../model/restaurante.model';

/*
  Generated class for the RestaurantesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestaurantesServiceProvider {

  ENDPOINT_RESTAURANTES = 'http://localhost:3000/restaurantes';
ResponseResponseResponsResponse
  constructor(public http: HttpClient) {
    
  }

  getRestaurantes(): Promise<any> {
    return this.http.get(this.ENDPOINT_RESTAURANTES).toPromise()
      .then((resposta: Response) =>
        resposta
      );
  }

}
