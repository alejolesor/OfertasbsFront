import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

    console.log(ProductData)


    const formData = new FormData();
    formData.append('File', ProductData.File)
    formData.append('Name',ProductData.Name)
    formData.append('Description',ProductData.Description)
    formData.append('EventDate',ProductData.EventDate)
    formData.append('DestinationCity',ProductData.DestinationCity)
    formData.append('TransportType',ProductData.TransportType)  
    formData.append('Amount',ProductData.Amount.toString())  
    formData.append('PeopleNumber',ProductData.PeopleNumber.toString())  
    formData.append('OriginCity',ProductData.OriginCity)
   


    return this.http.post(
      `${ this.url }/Products/createProduct` , formData
    ). 
    pipe(
      map( resp => {
        console.log(resp);
      })
    );
  }


}
