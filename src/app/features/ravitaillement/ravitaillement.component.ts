import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { StationService } from 'app/shared/services/station.service';
import { MatTableDataSource } from '@angular/material/table';
import { fuseAnimations } from '@fuse/animations';
import { TankService } from 'app/shared/services/tank.service';
import { RavitaillementService } from 'app/shared/services/ravitaillement.service';

export class station {
  _id: string;
  city: string;
  department: string;
  post: string;
  street: string;
  zipcode: number;
  tanks: MatTableDataSource<any>;
}
@Component({
  selector: 'app-ravitaillement',
  templateUrl: './ravitaillement.component.html',
  styleUrls: ['./ravitaillement.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class RavitaillementComponent implements OnInit {
  stations: [station];

  constructor(private stationService: StationService, private tankService : TankService) { }

  ngOnInit(): void {
    this.getStations();
  }
  displayedColumns: string[] = [
    "capacity",
    "type",
    "actions"

  ];

  getStations() {
    const connectedUser = localStorage.getItem("connectedId");
    this.stationService
      .getStationsByuser(connectedUser)
      .subscribe((result) => {
        this.stations = result.stationServices;
        this.stations.forEach(station=>{
      this.tankService.getTanksByStation(station._id).subscribe(res=>{
      station.tanks = new MatTableDataSource<any>(res.tanks);
})
        })  
        console.log(this.stations);
      
      });
  }



}


