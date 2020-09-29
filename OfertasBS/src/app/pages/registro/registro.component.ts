import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formUser: FormGroup;
  usuario: UsuarioModel;
  

  constructor( private fb: FormBuilder, private auth: AuthService,
              private router: Router ) { 
    this.crearFormulario()
  }

  ngOnInit() {

   }

   
   get emailNoValido(){
    return this.formUser.get('email').invalid && this.formUser.get('email').touched
  }

   crearFormulario(){
    this.formUser = this.fb.group({
      email: ['',[ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$') ] ],
      name: ['', Validators.required ],
      rol: ['', Validators.required],
      password: ['', Validators.required ],
      displayName: ['idDB']
    });
   }

   saveUser(){

    console.log(this.formUser.value)

    Swal.fire('Cargando', 'Espere por favor ...', 'info');
    Swal.showLoading();

    this.auth.registerUser(this.formUser.value)
    .subscribe( resp => {
      console.log(resp)
      Swal.close();
      this.router.navigateByUrl('/home');
    }, (err) => {   
      console.log(err.error.error.message)
      Swal.fire('Error al Registrar', err.error.error.message, 'error');
    });
    
   }



}
