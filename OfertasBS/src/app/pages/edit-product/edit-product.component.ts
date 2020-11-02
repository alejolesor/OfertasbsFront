import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { productModel } from 'src/app/models/catalogo.model';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  formRegistro: FormGroup;

  imagen: any;


  product: any;
  productData: productModel;

  constructor(private fb: FormBuilder,private auth: AuthService, private route: ActivatedRoute) {

    this.crearFormulario();


   }

  ngOnInit() {

    let idURL = this.route.snapshot.paramMap.get('id');

    var id = Number(idURL);

      this.auth.getproductxId(id).subscribe( res => {
        
        this.product = res

        this.get(this.product,id)
        
  
    });
  

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

  get(product:any, id: number){
    

    this.formRegistro = this.fb.group({
      Name: [product.name],
      DestinationCity: [product.destinationCity],
      Amount: [product.amount],
      EventDate: [product.eventDate],
      Description: [product.description],
      OriginCity: [product.originCity],
      TransportType: [product.transportType],
      PeopleNumber: [product.peopleNumber],
      Id:[id]
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

      this.auth.updateProduct(form)
        .subscribe(resp => {
          Swal.fire('Almacenado', 'Producto Actualizado Correctamete', 'info');
          console.log(resp)
        }, (err) => {
          Swal.fire('Error al Actualizar', "Error", 'error');
          console.log(err)
        });
    }

  }

}
