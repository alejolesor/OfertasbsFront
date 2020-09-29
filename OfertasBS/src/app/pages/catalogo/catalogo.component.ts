import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { catalogoModel } from 'src/app/models/catalogo.model';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  productsSer: catalogoModel[] = [];

  constructor( private auth: AuthService ) { }

  ngOnInit() {

    this.auth.getProductos().subscribe( res => {
      console.log(res);
      this.productsSer = res;
  });

  }

}
