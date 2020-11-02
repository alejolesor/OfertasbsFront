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

  imagen: any;

  constructor(private fb: FormBuilder, private service: TouresServicesService) {
    this.crearFormulario();
  }

  ngOnInit() {

  }


  crearFormulario() {

    this.formRegistro = this.fb.group({
      Name: [''],
      DestinationCity: [''],
      Amount: [''],
      EventDate: [''],
      Description: [''],
      OriginCity: [''],
      TransportType: [''],
      PeopleNumber: ['']
    });

  }

  loadFile(files: File[]) {

    if (files.length == 0) {
      return
    }
    this.imagen = files[0]
  }

  save() {

    console.log(this.formRegistro)
    let form = this.formRegistro.value

    if (this.imagen != null) {

      form.File = this.imagen

      this.service.registerProduct(form)
        .subscribe(resp => {
          Swal.fire('Almacenado', 'Producto Guardado Correctamete', 'info');
          console.log(resp)
        }, (err) => {
          Swal.fire('Error al Guardar', "Error", 'error');
          console.log(err)
        });
    }

  }




}
