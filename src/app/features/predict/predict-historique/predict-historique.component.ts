import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ActivatedRoute } from '@angular/router';
import { VenteService } from 'app/shared/services/vente.service';
@Component({
  selector: 'app-predict-historique',
  templateUrl: './predict-historique.component.html',
  styleUrls: ['./predict-historique.component.scss']
})
export class PredictHistoriqueComponent implements OnInit {
  highcharts = Highcharts;
  chartOptions4 : any;

  constructor(private route :ActivatedRoute,private VenteService :VenteService) { }

 
  ngOnInit(): void {
    this.initLineChart2();
  }
 
 initLineChart2(){
    this.route.paramMap.subscribe((routes: any) => {
    this.VenteService.getventesByType(routes.params.id).subscribe(res=>{
    this.chartOptions4 = {   
       chart: {
          type: "spline"
       },
       title: {
          text: "Prévision des ventes"
       },
       subtitle: {
          text: "Prédiction"
       },
       xAxis:{
          categories:["01/07/2020","02/07/2020","03/07/2020","04/07/2020","05/07/2020"]
       },
       yAxis: {          
          title:{
             text:"Revenue en Dt"
          } 
       },
       tooltip: {
          valueSuffix:" Dt"
       },
       series: [{
          name: 'Prévision',
          data: [500,700,900,1200,680]
       },
       {
          name: 'Vente réel',
          data: [670,720,905,1000,900]
       },
     
      ]
       
    };
 });
 })
 
 }
  

}
