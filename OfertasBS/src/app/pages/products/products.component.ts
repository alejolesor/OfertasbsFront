import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { catalogoModel } from 'src/app/models/catalogo.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productsplanes: any[] = [];
  products: any[] = [];

  constructor( private auth: AuthService ) { }
  

  ngOnInit() {

    this.auth.getproductsPlanes().subscribe( res => {

      this.products = res
      //console.log(this.products)

    })

    this.auth.getproductsTour().subscribe( res => {
      
      this.productsplanes = res
      //console.log(this.productsplanes);

  });

  }

  buscarProduct(product:string){
    console.log(product)
  }

}
