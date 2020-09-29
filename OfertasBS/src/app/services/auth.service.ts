import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { catalogoModel } from '../models/catalogo.model';
import { cotizacionModel, cotizaListModel, oferta } from '../models/cotizacion.model';
import { map } from 'rxjs/operators';
import { Key } from 'protractor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


 private url = 'https://localhost:44319/api';
  //private url = 'https://ofertasbsapi.azurewebsites.net/api';
  userToken: string;
  rol: string;
  idDB: string;


  constructor(private http : HttpClient) {
    this.leerToken();
    this.readRol();

   }

  //registerUser registra usuario en FireBase 
  registerUser( usuario : UsuarioModel){

    const authData = {
      ...usuario,
      returnSecureToken: true

    };
    return this.http.post(
      `${ this.url }/users` , authData
    ).
    pipe(
      map( resp => {
        this.guardarToken( resp['idToken'], resp['localId'], resp['email'], resp['rol'], resp['idDB'],  resp['rute']  );
        return resp;
      })
    );

  }

  login(usuario : UsuarioModel){

    const authData = {
      ...usuario,
      returnSecureToken: true
    };
    return this.http.post(
      `${ this.url }/users/login` , authData
    ). 
    pipe(
      map( resp => {
        this.guardarToken( resp['idToken'] , resp['localId'], resp['email'], resp['rol'],resp['idDB'],  resp['rute'] );
        return resp;
      })
    );

  }

  private guardarToken( idToken: string, iduser: string, email: string, rol: string, idDB: string,rutes: string){

    this.userToken = idToken;
    localStorage.setItem('token', idToken);
    localStorage.setItem('iduser', iduser);
    localStorage.setItem('email', email);
    localStorage.setItem('rol',rol);
    localStorage.setItem('idDB',idDB)
    localStorage.setItem('rute', rutes)

  }


  leerToken(){
    if ( localStorage.getItem('token') ) {
      this.userToken = localStorage.getItem('token');
    }else{
      this.userToken = '';
    }

    return this.userToken;
  }

  autorizeRoute(routes: number){

   return  localStorage.getItem('rute').split(',').indexOf(routes.toString()) > -1;

  }

  readRol(){
    if (localStorage.getItem('rol')) {
     
      this.rol = localStorage.getItem('rol');

    }else{
      this.rol = '';
    }
    return this.rol;
  }

  rolCurrent():string{

    console.log("can guard +" + this.rol)

    return this.rol;

  }


  estaAutenticado() : boolean {
   
    if ( this.userToken.length < 2 ) {
      return false;
    }
    return true;

  }

  registerProduct( product: catalogoModel) {

    const ProductData = {
      ...product
    };

    return this.http.post(
      `${ this.url }/users/createProduct` , ProductData
    ). 
    pipe(
      map( resp => {
        console.log(resp);
      })
    );
  }



  getProductos(){
      return this.http.get(
        `${ this.url }/users/loadProducts`
      ). 
      pipe(
        map( this.crearArreglo )
      )
    }


    getCotizaciones(){
      return this.http.get(
        `${ this.url }/cotizar/loadCotizaciones`
      ). 
      pipe(
        map( this.crearArreglo2 )
      )
    }


  getProductId( id: number){

    return this.http.get(
      `${ this.url }/users/ProductId/?idproduct=${ id }`)

  }

  getCotizacionId(id: number){

    return this.http.get(
      `${ this.url }/cotizar/cotizacionId/?id=${ id }`)

  }

  crearCotizacion( cotizacion: cotizacionModel){
    
    const cotizacionData = {
      ...cotizacion
    };

    return this.http.post(
      `${ this.url }/cotizar/creaCotiza` , cotizacionData
    ). 
    pipe(
      map( resp => {
        console.log(resp);
      })
    );

  }





  crearOFerta( oferta: oferta){
    
    const ofertaData = {
      ...oferta
    };

    return this.http.post(
      `${ this.url }/cotizar/creaOferta` , ofertaData
    ). 
    pipe(
      map( resp => {
        console.log(resp);
      })
    );

  }

  getproductsTour(): Observable<any>{
    return this.http.get<any>(
      `${ this.url }/users/ProductsT`
    ). 
    pipe( map((data:any)=> data.data.results)
    )
  }

  
  getproductsTourxId(id: number): Observable<any>{
    return this.http.get<any>(
      `${ this.url }/users/getProdcutxId?idproduct=${ id }`
    ). 
    pipe( map((data:any)=> data.data.results)
    )
  }




    private crearArreglo( products: object ){

      const producServ: catalogoModel[] = [];

      if( products === null) { return []; }

      Object.keys( products ).forEach( Key => {

        const product: catalogoModel = products[Key] 
        //product.Id = Key;

        producServ.push(product);

      });

      return producServ;

    }

    private crearArreglo2( cotizaciones: object ){

      const cotizarList: cotizaListModel[] = [];

      if( cotizaciones === null) { return []; }

      Object.keys( cotizaciones ).forEach( Key => {

        const cotizacion: cotizaListModel = cotizaciones[Key] 
        //product.Id = Key;

        cotizarList.push(cotizacion);

      });

      return cotizarList;

    }




  }


