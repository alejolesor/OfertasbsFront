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

  constructor( private auth: AuthService ) { }
  

  ngOnInit() {

    this.auth.getproductsTour().subscribe( res => {
      
      this.productsplanes = res
      console.log(this.productsplanes);

  });

  }

}
