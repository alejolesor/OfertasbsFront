import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, RouteReuseStrategy } from '@angular/router';
import { from } from 'rxjs';
import { catalogoModel } from 'src/app/models/catalogo.model';
import Swal from 'sweetalert2';
import { cotizacionModel } from 'src/app/models/cotizacion.model';


@Component({
  selector: 'app-cotizaciones',
  templateUrl: './cotizaciones.component.html',
  styleUrls: ['./cotizaciones.component.css']
})
export class CotizacionesComponent implements OnInit {

  
  formCotiza: FormGroup;
  idcatalogo: number;
  

  producto: catalogoModel = new catalogoModel();

  cotiza : cotizacionModel = new cotizacionModel();


  constructor(private fb: FormBuilder, private auth: AuthService, private route: ActivatedRoute) {
      this.creaFormulario(this.producto,null,null);
   }

  ngOnInit() {

    const idProduct = this.route.snapshot.paramMap.get('id');
    var id = parseInt(idProduct)
    console.log(idProduct);
    this.idcatalogo = id;

    this.auth.getProductId( id )
    .subscribe( ( resp: catalogoModel ) => {
      this.producto = resp;
      this.creaFormulario(this.producto,null,null);
    });

  }


  valor: number;

  calcular(){

    var cantidad = this.formCotiza.value.Stock;
    var Price = this.formCotiza.value.Price;
     this.valor = cantidad * Price;
     this.creaFormulario(this.producto, this.valor, cantidad)
    
  }

  creaFormulario(productoid : catalogoModel , valorTotal: number, cantidad: number){

    this.formCotiza = this.fb.group({
      
      Name: [productoid.Name],
      Category: [productoid.Category],
      Catalogue: [this.idcatalogo],
      Price: [productoid.Price],
      Stock:[cantidad],
      total:[valorTotal]

    });
  }



  cotizar(){

    this.cotiza.cotizacion_fecha = '2020-05-10';
    this.cotiza.id_cliente = 1;
    this.cotiza.id_cotizacion = 0;
    this.cotiza.id_estado = 1;
    this.cotiza.id_item_catalogo = this.idcatalogo;
    this.cotiza.item_cotizacion_cantidad = this.formCotiza.value.Stock;
    this.cotiza.item_cotizacion_precio = this.formCotiza.value.Price;
    

    this.auth.crearCotizacion(this.cotiza)
    .subscribe( resp => {
      Swal.fire('Almacenado', 'Cotizacion Guardada Correctamete', 'info');

    }, (err) => {   
      Swal.fire('Error al Guardar', "Error", 'error');
      console.log(err)
    });


  }


}
