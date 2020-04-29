import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private url = 'https://localhost:44319/api';
  userToken: string;


  constructor(private http : HttpClient) {
    this.leerToken();

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
        this.guardarToken( resp['idToken'] );
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
        this.guardarToken( resp['idToken'] );
        return resp;
      })
    );

  }

  private guardarToken( idToken: string){

    this.userToken = idToken;
    localStorage.setItem('token', idToken)

  }

  leerToken(){
    if ( localStorage.getItem('token') ) {
      this.userToken = localStorage.getItem('token');
    }else{
      this.userToken = '';
    }

    return this.userToken;
  }

  estaAutenticado() : boolean {
   
    if ( this.userToken.length < 2 ) {
      return false;
    }
    return true;


  }
}
