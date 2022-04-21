import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { StationService } from 'app/shared/services/station.service';
import { MatTableDataSource } from '@angular/material/table';
import { fuseAnimations } from '@fuse/animations';

export class station {
    _id: string;
    city: string;
    department: string;
    post: string;
    street: string;
    zipcode: number;
    tanks:MatTableDataSource<any>;
  }
@Component({
    selector: "app-indexs",
    templateUrl: "./indexs.component.html",
    styleUrls: ["./indexs.component.scss"],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class IndexsComponent implements OnInit {
    stations:[station];

    constructor(private stationService: StationService ) {}

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
