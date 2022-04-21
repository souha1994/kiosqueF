import { Component, OnInit } from '@angular/core';
import { PompeService } from 'app/shared/services/pompe.service';
import * as Highcharts from 'highcharts';
import { ActivatedRoute } from '@angular/router';
import { VenteService } from 'app/shared/services/vente.service';

@Component({
   selector: 'app-vente-statistic',
   templateUrl: './vente-statistic.component.html',
   styleUrls: ['./vente-statistic.component.scss']
})
export class VenteStatisticComponent implements OnInit {
   highcharts = Highcharts;
   chartOptions: any;
   chartOptions2: any;
   TotalEssence: any = 0;
   TotalGasoil: any = 0;

   constructor(private pompeService: PompeService, private route: ActivatedRoute, private VenteService: VenteService) { }


   ngOnInit(): void {
      this.initchart();
      this.intPiechart();

   }
   intPiechart() {
      this.route.paramMap.subscribe((routes: any) => {
         this.VenteService.getventesByStation(routes.params.id).subscribe(res => {
            res.totalEssence.forEach(element => {
               this.TotalEssence += element;
            });
            res.totalDisel.forEach(element => {
               this.TotalGasoil += element;
            });
            console.log(this.TotalGasoil);
            
            this.chartOptions2 = {
               chart: {
                  plotBorderWidth: null,
                  plotShadow: false
               },
               title: {
                  text: 'Statistique by type'
               },
               tooltip: {
                  pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
               },
               plotOptions: {
                  pie: {
                     allowPointSelect: true,
                     cursor: 'pointer',

                     dataLabels: {
                        enabled: false
                     },

                     showInLegend: true
                  }
               },
               series: [{
                  type: 'pie',
                  name: 'Browser share',
                  data: [
                     ['Disel', this.TotalGasoil],
                     {
                        name: 'Essence',
                        y: this.TotalEssence,
                        sliced: true,
                        selected: true
                     },

                  ]
               }]
            };
         })
      })
   }




   initchart() {
      this.route.paramMap.subscribe((routes: any) => {
         this.VenteService.getventesByStation(routes.params.id).subscribe(res => {
            console.log(res);
            this.chartOptions = {
               chart: {
                  type: 'column'
               },
               title: {
                  text: 'Statistique Par poste'
               },
               subtitle: {
                  text: ''
               },
               xAxis: {
                  categories: ["Post1", "Post2", "Post3"],
                  crosshair: true
               },
               yAxis: {
                  min: 0,
                  title: {
                     text: ' dt'
                  }
               },
               tooltip: {
                  headerFormat: '<span style = "font-size:10px">{point.key}</span><table>',
                  pointFormat: '<tr><td style = "color:{series.color};padding:0">{series.name}: </td>' +
                     '<td style = "padding:0"><b>{point.y:.1f} dt</b></td></tr>', footerFormat: '</table>', shared: true, useHTML: true
               },
               plotOptions: {
                  column: {
                     pointPadding: 0.2,
                     borderWidth: 0
                  }
               },
               series: [{
                  name: 'Disel',
                  data: res.totalDisel
               },
               {
                  name: 'Sans-plomb',
                  data: res.totalEssence
               },

               ]
            };
         })
      })
   }

}
