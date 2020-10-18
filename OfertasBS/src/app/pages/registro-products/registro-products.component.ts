import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { TouresServicesService } from 'src/app/services/toures-services.service';

@Component({
  selector: 'app-registro-products',
  templateUrl: './registro-products.component.html',
  styleUrls: ['./registro-products.component.css']
})
export class RegistroProductsComponent implements OnInit {

  formRegistro: FormGroup;

  constructor(private fb: FormBuilder, private service: TouresServicesService) {
    this.crearFormulario();
   }

  ngOnInit() {
    
  }


  crearFormulario(){

    this.formRegistro = this.fb.group({
      Producto: [''],
      Destino: [''],
      Precio: [''],
      FechaEvento: [''],
      Description:[''],
      Imagen:[''],
      Origen:[''],
      Transporte:[''],
      PeopleNumber:['']
    });

  }


  save(){

            console.log(this.formRegistro);

            this.service.registerProduct(this.formRegistro.value)
            .subscribe( resp => {
              Swal.fire('Almacenado', 'Producto Guardado Correctamete', 'info');
              console.log(resp)
            }, (err) => {   
              Swal.fire('Error al Guardar', "Error", 'error');
              console.log(err)
            });

      }




}
