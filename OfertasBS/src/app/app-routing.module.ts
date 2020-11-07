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
import { ProductOmsComponent } from './pages/product-oms/product-oms.component';
import { RegistroProductsComponent } from './pages/registro-products/registro-products.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { CartShopComponent } from './pages/cart-shop/cart-shop.component';


const routes: Routes = [
  { path: 'home'    , component: HomeComponent, canActivate: [ AuthGuard ],data:{id:0}  },
  { path: 'registro', component: RegistroComponent },
  { path: 'login'   , component: LoginComponent },
  { path: 'estadisticas', component: EstadisticasComponent,canActivate: [ AuthGuard ], data:{id:1}  },
  { path: 'products', component: ProductsComponent,canActivate: [ AuthGuard ], data:{id:2}  },
  { path: 'product/:id', component: ProductComponent,data:{id:3}  },
  { path: 'productsoms', component: ProductOmsComponent,canActivate: [ AuthGuard ], data:{id:4}  },
  { path: 'productRegistro', component: RegistroProductsComponent,canActivate: [ AuthGuard ], data:{id:5}  },
  { path: 'productEdit/:id', component: EditProductComponent,canActivate: [ AuthGuard ], data:{id:5}  },
  { path: 'cartShop', component: CartShopComponent,canActivate: [ AuthGuard ], data:{id:5}  },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [AuthcanGuard]
})
export class AppRoutingModule { }
