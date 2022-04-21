import { Component, OnInit, ViewEncapsulation, SimpleChanges, ViewChild } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { UserService } from 'app/shared/services/user.service';
import { StationService } from 'app/shared/services/station.service';
import { HttpClient } from '@angular/common/http';
import { query } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { TankService } from 'app/shared/services/tank.service';

export class station {
  _id: string;
  city: string;
  department: string;
  post: string;
  street: string;
  zipcode: number;
  tanks: MatTableDataSource<any>;
}
export class mapObject {
  type: string;
  query: [];
  features: [];
  attribution: string;
}
@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})

export class StationComponent implements OnInit {
  stations: [station];
  user: any;
  constructor(private userService: UserService, private tankService: TankService, private stationService: StationService, private http: HttpClient) { }

  ngOnInit(): void {

    this.getConnected();

  }

  displayedColumns: string[] = [
    "capacity",
    "type",
    "actions"

  ];
  search_Word(word: string): any {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"
    const token = "pk.eyJ1IjoiaGFiaWJkYW91IiwiYSI6ImNqb3l3YjNjcTAwanUzcm5qbWZ5ZmhvMmoifQ.rMS3RRmvsY09yDIF-vXe8w";
    this.http.get(url + word + ".json?types=country&access_token=" + token).subscribe((res: mapObject) => {

      res.features.forEach((geo: any) => {
        return geo.geometry.coordinates;
      })
    })
  }


  public getConnected() {
    var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
    mapboxgl.accessToken = 'pk.eyJ1IjoiaGFiaWJkYW91IiwiYSI6ImNqb3l3YjNjcTAwanUzcm5qbWZ5ZmhvMmoifQ.rMS3RRmvsY09yDIF-vXe8w';
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
    });

    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"
    const token = "pk.eyJ1IjoiaGFiaWJkYW91IiwiYSI6ImNqb3l3YjNjcTAwanUzcm5qbWZ5ZmhvMmoifQ.rMS3RRmvsY09yDIF-vXe8w&autocomplete=true&types=country";
    var Datatank: [any];
    this.userService.getuser().subscribe(data => {
      this.user = data;
      this.stationService.getStationsByuser(data._id).subscribe(result => {
        this.stations = result.stationServices;

        this.stations.forEach(station => {

          this.http.get(url + station.street + ".json?types=country&access_token=" + token).subscribe((res: mapObject) => {
            res.features.forEach((geo: any) => {
              new mapboxgl.Marker()
                .setLngLat(geo.geometry.coordinates)
                .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
                  .setHTML('<h3>' + "title" + '</h3><p>' + "Popup MArker" + '</p>'))
                .addTo(map);
            })
          })
          this.tankService.getTanksByStation(station._id).subscribe(res => {
            station.tanks = new MatTableDataSource<any>(res.tanks);

          });
        })
      });

    });
  }
}
