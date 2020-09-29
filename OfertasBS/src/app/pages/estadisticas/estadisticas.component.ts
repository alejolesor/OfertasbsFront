import { Component, OnInit } from '@angular/core';
import { GoogleChartsModule } from 'angular-google-charts';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    

  google.charts.load('current', { 'packages': ['corechart'] });
  google.charts.setOnLoadCallback(drawChart);
  google.charts.setOnLoadCallback(drawChart2);

  function drawChart2() {



      var data = google.visualization.arrayToDataTable([
          ['Proveedores', 'Ofertas'],
          ['Proveedor NIKE', 11],
          ['Proveedor Adidas', 2],
          ['Proveedor MICROSOFT', 2],
          ['Proveedor AMAZON', 2],
      ]);



      var options = {
          title: 'Ofertas por proveedor'
      };



      var chart = new google.visualization.PieChart(document.getElementById('piechart'));



      chart.draw(data, options);
  }



  function drawChart() {
      var data = google.visualization.arrayToDataTable([
          ['Proveedor', 'Ofertas Aprobadas', 'Ofertas Declinadas'],
          ['Proveedor NIKE', 3, 5],
          ['Proveedor Adidas', 6, 1],
          ['Proveedor MICROSOFT', 2, 1],
          ['Proveedor AMAZON', 0, 0]
      ]);



      var options = {
          title: 'Ofertas Mes',
          hAxis: { title: 'Proveedores', titleTextStyle: { color: '#333' } },
          vAxis: { minValue: 0 }
      };



      var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
      chart.draw(data, options);

  }
    

  }


}
