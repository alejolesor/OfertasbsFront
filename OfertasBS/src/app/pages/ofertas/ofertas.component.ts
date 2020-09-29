import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { catalogoModel } from 'src/app/models/catalogo.model';
import { oferta, cotizacionModel } from 'src/app/models/cotizacion.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {

  cotizacion: cotizacionModel = new cotizacionModel();

  formOferta: FormGroup;

  ofertaData : oferta = new oferta();

  constructor(private fb: FormBuilder, private auth: AuthService, private route: ActivatedRoute) {

    this.creaFormulario(this.cotizacion,null,null);
   }

  ngOnInit() {

    const idcotizacion = this.route.snapshot.paramMap.get('id');
    var id = parseInt(idcotizacion);

    console.log(idcotizacion)

    this.auth.getCotizacionId( id )
    .subscribe( ( resp: cotizacionModel ) => {
      this.cotizacion = resp;
      this.creaFormulario(this.cotizacion,null,null);
    });

  }


  creaFormulario(productoid : cotizacionModel , valorTotal: number, cantidad: number){
    

    this.formOferta = this.fb.group({
      Name: [582],
      Price: [2000],
      Stock:[cantidad],
      total:[valorTotal],
      idcotizacion:[2],
      itemcotizacion: [2],
      descuento:['']

    });
  }


  
  ofertar(){

    this.ofertaData.id_cotizacion = 1  //this.formOferta.value.idcotizacion;
    this.ofertaData.id_estado = 1;
    this.ofertaData.id_item_catalogo = 5 //this.formOferta.value.Name;
    this.ofertaData.id_item_cotizacion = 3 //this.formOferta.value.itemcotizacion;
    this.ofertaData.id_oferta = 1;
    this.ofertaData.item_cotizacion_cantidad = this.formOferta.value.Stock;
    this.ofertaData.item_cotizacion_descuento = this.formOferta.value.descuento;
    this.ofertaData.item_cotizacion_precio = this.formOferta.value.Price;
    this.ofertaData.id_proveedor = 1;
    this.ofertaData.oferta_fecha = "2020-05-11";

    this.auth.crearOFerta(this.ofertaData)
    .subscribe( resp => {
      Swal.fire('Almacenado', 'Oferta Guardada Correctamete', 'info');
      console.log(resp);

    }, (err) => {   
      Swal.fire('Error al Guardar', "Error", 'error');
      console.log(err)
    });

  }

}
