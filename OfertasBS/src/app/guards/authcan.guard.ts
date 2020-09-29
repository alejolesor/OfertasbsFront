import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthcanGuard implements CanLoad {

  rol: string;

  constructor( private auth:AuthService, private router: Router ) {}


  canLoad(route: Route): boolean {

    let rol: string = this.auth.rolCurrent();

    return true;
  }

}
