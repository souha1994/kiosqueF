import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StationService } from 'app/shared/services/station.service';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class PredictComponent implements OnInit {

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
