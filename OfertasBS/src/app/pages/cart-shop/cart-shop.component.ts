import { Component, OnInit } from '@angular/core';
import { catalogoModel, productCart } from 'src/app/models/catalogo.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, RouteReuseStrategy } from '@angular/router';
import { TouresServicesService } from 'src/app/services/toures-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart-shop',
  templateUrl: './cart-shop.component.html',
  styleUrls: ['./cart-shop.component.css']
})
export class CartShopComponent implements OnInit {

  formCart: FormGroup;
  productsCartTotal: productCart[]
  totalProd: number
  value = 0


  constructor(private fb: FormBuilder, private auth: TouresServicesService, private route: ActivatedRoute) {
    this.creaFormulario(0);
  }

  ngOnInit() {

    this.productsCartTotal = this.readProductCart();
    var total = this.calculate();
    this.creaFormulario(total)

  }


  readProductCart() {

    let productLs;

    if (localStorage.getItem('product') === null) {

      productLs = []
    } else {

      productLs = JSON.parse(localStorage.getItem('product'))

    }


    return productLs

  }

  creaFormulario(total: number) {

    var formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    console.log(total)

    this.formCart = this.fb.group({


      Total: [formatter.format(total)],
      cantidad: [''],

    });
  }

  calculateCantidad(cantidad: number, idproduct: number, position: number) {

    console.log(cantidad, idproduct, position)

    var productsCartTotal: productCart[] = []
    let productLs;
    var total = 0;
    let productxCantidad = 0;
    let Globaltotal = 0;
    productLs = JSON.parse(localStorage.getItem('product'))
    console.log(productLs)
    for (var index in productLs) {
      if (position == Number(index)) {

        productsCartTotal.push({ Id: productLs[index].Id, Titulo: productLs[index].Titulo, Amount: productLs[index].Amount, Cantidad: cantidad });

        
           let calculoProduct = productLs[position].Amount * cantidad

            total = Globaltotal + calculoProduct

      }

      if (productLs[index].Cantidad != undefined) {

        if (productLs[index].Cantidad != 0) {

          Globaltotal = Globaltotal + productLs[index].Amount * productLs[index].Cantidad

          productsCartTotal.push({ Id: productLs[index].Id, Titulo: productLs[index].Titulo, Amount: productLs[index].Amount, Cantidad: productLs[index].Cantidad });
        }



      }
      if (productLs[index].Cantidad == undefined && position != Number(index)) {

        total = total + productLs[index].Amount
        Globaltotal = total

        productsCartTotal.push({ Id: productLs[index].Id, Titulo: productLs[index].Titulo, Amount: productLs[index].Amount, Cantidad: undefined });

      }

      

    }

    localStorage.removeItem('product');

    localStorage.setItem('product', JSON.stringify(productsCartTotal))




    this.totalProd = total

    this.creaFormulario(this.totalProd)

  }

  calculate() {

    let productLs;
    var total = 0;
    productLs = JSON.parse(localStorage.getItem('product'))
    console.log(productLs)
    for (var index in productLs) {
      total = total + productLs[index].Amount
      console.log(productLs[index].Amount)
    }

    this.totalProd = total
    console.log(total)

    return this.totalProd

  }

  deleteProduct(events: any, i: number) {

    this.productsCartTotal.splice(i, 1);
    localStorage.removeItem('product')
    localStorage.setItem('product', JSON.stringify(this.productsCartTotal))

  }

  SendOrder() {

    console.log(this.formCart.value.Total)
    var total = Number(this.formCart.value.Total.replace(/[^0-9.-]+/g, ""));


    let productLs;
    productLs = JSON.parse(localStorage.getItem('product'))
    console.log(productLs)
    this.auth.createOrder(productLs, total)
      .subscribe(resp => {
        Swal.fire('Generada', 'La orden se ha generado correctamente', 'info');
        console.log(resp)
      }, (err) => {
        Swal.fire('Error al Generar Orden', "Error", 'error');
        console.log(err)
      });

  }


}
