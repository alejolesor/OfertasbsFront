import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private auth:AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot ): boolean {

    if ( this.auth.estaAutenticado() ) {

      let rol: string = this.auth.rolCurrent();

      let componentId = route.data['id']

     return this.auth.autorizeRoute(componentId)

  
    }else{
      this.router.navigateByUrl('/login');
      return false;
    }
  }


}
