import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { APIS } from "app/config";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class StationService {
    constructor(private http: HttpClient) {}

    getStationbyId(id: any) {
        return this.http.get<any>(`${APIS.STATIONS}/${id}`);
    }

    getAllStations() {
        return this.http.get<any>(`${APIS.STATIONS}`);
    }
    getStationsByuser(id: any) {
        return this.http.get<any>(`${APIS.STATIONS}/getStations/${id}`);
    }
  
    AddStationTouser(id: any, stationServices: any): Observable<any> {
        return this.http.post<any>(
            `${APIS.STATIONS}/Station`,
            { id, stationServices }
        );
    }
    putStation(station: any, id: any) {
        return this.http.put<any>(`${APIS.STATIONS}/${id}`, station);
    }
    DeleteStation(station: any) {
        return this.http.delete<any>(`${APIS.STATIONS}/${station}`);
    }
    AddStation(station: any) {
        return this.http.post<any>(`${APIS.STATIONS}`, station);
    }
    AddVente(id: any) {
        return this.http.get<any>(`${APIS.STATIONS}/venteStation/${id}`);
    }
}
