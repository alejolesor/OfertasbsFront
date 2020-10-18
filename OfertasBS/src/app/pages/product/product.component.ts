import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: any;
  productPlane: any;

  constructor( private auth: AuthService, private route: ActivatedRoute) {
    this.route.params.subscribe( parametros => {

      console.log(parametros)
      this.getProductId(parametros.id)

    });
   }

  ngOnInit() {

  }



  getProductxid(id: number){

    this.auth.getproductsTourxId(id).subscribe( res => {
      
      this.productPlane = res
      console.log(this.productPlane);

  });


  }


  getProductId(id: number){

    this.auth.getproductxId(id).subscribe( res => {
      
      this.product = res
      console.log(this.product);

  });


  }


}
