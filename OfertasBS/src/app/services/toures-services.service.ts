import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { catalogoModel, productModel } from '../models/catalogo.model';
import { cotizacionModel, cotizaListModel, oferta } from '../models/cotizacion.model';
import { map } from 'rxjs/operators';
import { Key } from 'protractor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TouresServicesService {

  private url = 'https://localhost:44319/api';
  //private url = 'https://ofertasbsapi.azurewebsites.net/api';
  userToken: string;
  rol: string;
  idDB: string;

  constructor(private http : HttpClient) { }


  registerProduct( product: productModel) {

    const ProductData = {
      ...product
    };

    return this.http.post(
      `${ this.url }/Products/createProduct` , ProductData
    ). 
    pipe(
      map( resp => {
        console.log(resp);
      })
    );
  }





}
