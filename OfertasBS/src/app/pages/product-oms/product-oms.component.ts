import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouteReuseStrategy } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-oms',
  templateUrl: './product-oms.component.html',
  styleUrls: ['./product-oms.component.css']
})
export class ProductOmsComponent implements OnInit {

  products: any[] = [];

  constructor(private fb: FormBuilder, private auth: AuthService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.auth.getProductosPlaene().subscribe(res => {
      console.log(res);
      this.products = res;
    });

  }



  deleteProduct(events: any, i: number) {

    Swal.fire({
      title: '¿Está Seguro?',
      icon: 'question',
      text: `Esta seguro que desea borrar el evento : ${ events.name }`,
      showConfirmButton: true,
      showCancelButton: true,

    }).then(resp => {

      if (resp.value) {
        this.products.splice(i, 1);  
        this.auth.deleteProduct(events.id).subscribe(resp => {
          Swal.fire('Borrado', 'Producto Eliminado Correctamete', 'info');
          console.log(resp)
        }, (err) => {
          Swal.fire('Error al Eliminar Producto', "Error", 'error');
          console.log(err)
        });;
      }
    })


  }

}
