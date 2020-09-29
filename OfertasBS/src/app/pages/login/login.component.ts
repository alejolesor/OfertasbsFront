import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  forma: FormGroup;

  constructor( private fb: FormBuilder, private auth: AuthService,
              private router: Router) {
    this.crearFormulario()
   }

  ngOnInit() {
  }

  get emailNoValido(){
    return this.forma.get('email').invalid && this.forma.get('email').touched
  }

  crearFormulario(){

    this.forma = this.fb.group({
      email: ['', [ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$') ] ],
      password: ['', Validators.required ]
    });

  }

  save(){

    Swal.fire('Cargando', 'Espere por favor ...', 'info');
    Swal.showLoading();

    this.auth.login(this.forma.value)
    .subscribe( resp => {
      console.log(resp)
      Swal.close();
      this.router.navigateByUrl('/home');
    }, (err) => {
      console.log(err.error.error.message)
      Swal.fire('Error al autenticar', err.error.error.message, 'error');
      
    });

  }

}
