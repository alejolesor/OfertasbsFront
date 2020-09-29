import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { RegistroCatalogoComponent } from './pages/registro-catalogo/registro-catalogo.component';
import { CotizacionesComponent } from './pages/cotizaciones/cotizaciones.component';
import { ListCotizaComponent } from './pages/list-cotiza/list-cotiza.component';
import { OfertasComponent } from './pages/ofertas/ofertas.component';
import { EstadisticasComponent } from './pages/estadisticas/estadisticas.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductComponent } from './pages/product/product.component';
import { AuthcanGuard } from './guards/authcan.guard';


const routes: Routes = [
  { path: 'home'    , component: HomeComponent, canActivate: [ AuthGuard ],data:{id:0}  },
  { path: 'registro', component: RegistroComponent },
  { path: 'login'   , component: LoginComponent },
  { path: 'estadisticas', component: EstadisticasComponent,canActivate: [ AuthGuard ], data:{id:1}  },
  { path: 'products', component: ProductsComponent,canActivate: [ AuthGuard ], data:{id:3}  },
  { path: 'product/:id', component: ProductComponent,data:{id:5}  },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [AuthcanGuard]
})
export class AppRoutingModule { }
