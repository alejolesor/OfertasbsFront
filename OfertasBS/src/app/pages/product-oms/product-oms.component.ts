import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouteReuseStrategy } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-product-oms',
  templateUrl: './product-oms.component.html',
  styleUrls: ['./product-oms.component.css']
})
export class ProductOmsComponent implements OnInit {

  products: any[] = [];

  constructor(private fb: FormBuilder, private auth: AuthService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.auth.getProductosPlaene().subscribe( res => {
      console.log(res);
      this.products = res;
  });

  }

}
