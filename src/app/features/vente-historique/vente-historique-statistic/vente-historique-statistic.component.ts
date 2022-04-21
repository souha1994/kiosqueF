import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ActivatedRoute } from '@angular/router';
import { VenteService } from 'app/shared/services/vente.service';

@Component({
  selector: 'app-vente-historique-statistic',
  templateUrl: './vente-historique-statistic.component.html',
  styleUrls: ['./vente-historique-statistic.component.scss']
})
export class VenteHistoriqueStatisticComponent implements OnInit {
  highcharts = Highcharts;
  chartOptions3 : any;
  chartOptions4 : any;
  constructor(private route: ActivatedRoute,private VenteService: VenteService) { }

  ngOnInit(): void {
    this.initLineChart();
    this.initLineChart2();
  }





  initLineChart(){
    this.route.paramMap.subscribe((routes: any) => {
 
    this.VenteService.getventesByPoste(routes.params.id).subscribe(res=>{
 
     
 
    this.chartOptions3 = {   
       chart: {
          type: "spline"
       },
       title: {
          text: "Daily Statistics"
       },
       subtitle: {
          text: "By poste"
       },
       xAxis:{
          categories:res.resltDate
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
          name: 'Post1',
          data: res.resltPost1
       },
       {
          name: 'Post2',
          data: res.resltPost2
       },
       {
          name: 'Post3',
          data: res.resltPost3
       },
      ]
       
    };
 });
 })
 
 }
 
 initLineChart2(){
    this.route.paramMap.subscribe((routes: any) => {
    this.VenteService.getventesByType(routes.params.id).subscribe(res=>{
    this.chartOptions4 = {   
       chart: {
          type: "spline"
       },
       title: {
          text: "Daily Statistics"
       },
       subtitle: {
          text: "By Type"
       },
       xAxis:{
          categories:res.resltDate
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
          name: 'Essence',
          data: res.totalEssence
       },
       {
          name: 'Gasoil',
          data: res.totalGasoil
       },
     
      ]
       
    };
 });
 })
 
 }
 

}
