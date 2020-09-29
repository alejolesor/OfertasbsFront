import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-registro-catalogo',
  templateUrl: './registro-catalogo.component.html',
  styleUrls: ['./registro-catalogo.component.css']
})
export class RegistroCatalogoComponent implements OnInit {

  formRegistro: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService) {

    this.crearFormulario();
   }

  ngOnInit() {

  }

  crearFormulario(){

    this.formRegistro = this.fb.group({
      Name: [''],
      Category: [''],
      Catalogue: [''],
      Price: [''],
      Stock:['']
    });

  }


  save(){

    console.log(this.formRegistro);

    this.auth.registerProduct(this.formRegistro.value)
    .subscribe( resp => {
      Swal.fire('Almacenado', 'Producto Guardado Correctamete', 'info');
      console.log(resp)
    }, (err) => {   
      Swal.fire('Error al Guardar', "Error", 'error');
      console.log(err)
    });

  }

}
