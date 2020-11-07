import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catalogoModel,productCart } from 'src/app/models/catalogo.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: any;
  productPlane: any;
  productsCartTotal: productCart[] 

  constructor( private auth: AuthService, private route: ActivatedRoute) {
    this.route.params.subscribe( parametros => {

      console.log(parametros)
      this.getProductId(parametros.id)

    });
   }

  ngOnInit() {

    this.productsCartTotal = this.readProductCart();

  }


  addItemCart(e: any){

    let products = this.readProductCart();

    products.push({Id:e.id,Titulo:e.name,Amount: e.amount});

    this.productsCartTotal = products
    console.log(this.productsCartTotal)

    localStorage.setItem('product',JSON.stringify(products))
    
    
  }


  readProductCart(){

    let productLs;

    if (localStorage.getItem('product') === null) {

      productLs = []
    }else{

      productLs = JSON.parse(localStorage.getItem('product'))  

    }
    console.log(productLs)

    return productLs

  }

  cleanCart(){
    localStorage.removeItem('product')
    this.productsCartTotal = []
  }

  deleteProduct(events: any, i: number) {

        this.productsCartTotal.splice( i, 1 );
        localStorage.removeItem('product')
        localStorage.setItem('product',JSON.stringify(this.productsCartTotal))
    
  }

  getProductId(id: number){

    this.auth.getproductxId(id).subscribe( res => {
      
      this.product = res
      

  });


  }


}
