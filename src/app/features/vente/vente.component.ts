import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import * as Highcharts from 'highcharts';
import { PompeService } from 'app/shared/services/pompe.service';
import { StationService } from 'app/shared/services/station.service';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class VenteComponent implements OnInit {
   stations :any[];
constructor(private stationService: StationService ) { }

  ngOnInit(): void {
     this.getStations();
  }
  getStations() {
   const connectedUser = localStorage.getItem("connectedId");
   this.stationService
       .getStationsByuser(connectedUser)
       .subscribe((result) => {
           this.stations = result.stationServices;
       });
 }
}
