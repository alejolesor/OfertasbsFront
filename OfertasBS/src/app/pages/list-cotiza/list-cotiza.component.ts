import { Component, OnInit } from '@angular/core';
import { cotizaListModel } from 'src/app/models/cotizacion.model';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-list-cotiza',
  templateUrl: './list-cotiza.component.html',
  styleUrls: ['./list-cotiza.component.css']
})
export class ListCotizaComponent implements OnInit {

  cotizaciones: cotizaListModel[] = [];

  constructor( private auth: AuthService  ) { }

  ngOnInit() {

    this.auth.getCotizaciones().subscribe( res => {
      console.log(res);
      this.cotizaciones = res;
  });

  }



}
