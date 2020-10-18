import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';

import { RegistroComponent } from './pages/registro/registro.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { RegistroCatalogoComponent } from './pages/registro-catalogo/registro-catalogo.component';
import { CotizacionesComponent } from './pages/cotizaciones/cotizaciones.component';
import { ListCotizaComponent } from './pages/list-cotiza/list-cotiza.component';
import { OfertasComponent } from './pages/ofertas/ofertas.component';
import { EstadisticasComponent } from './pages/estadisticas/estadisticas.component';
import { ProductsComponent } from './pages/products/products.component';

//pipes
import { ImagenesPipe } from './pipes/imagenes.pipe';
import { ProductComponent } from './pages/product/product.component';
import { AuthService } from './services/auth.service';
import { ProductOmsComponent } from './pages/product-oms/product-oms.component';
import { RegistroProductsComponent } from './pages/registro-products/registro-products.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    HomeComponent,
    LoginComponent,
    CatalogoComponent,
    RegistroCatalogoComponent,
    CotizacionesComponent,
    ListCotizaComponent,
    OfertasComponent,
    EstadisticasComponent,
    ProductsComponent,
    ImagenesPipe,
    ProductComponent,
    ProductOmsComponent,
    RegistroProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
