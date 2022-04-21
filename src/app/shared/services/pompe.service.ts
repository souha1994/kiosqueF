import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { APIS } from "app/config";
import { Observable } from 'rxjs';

@Injectable({ providedIn: "root" })
export class PompeService {
    constructor(private http: HttpClient) {}

    getAllPompes() {
        return this.http.get<any>(`${APIS.POMPES}`);
    }

    putPompe(pompe: any,id : any) {
        return this.http.put<any>(`${APIS.POMPES}/${id}`, pompe);
    }

    DeletePompe(id: any) {
        return this.http.delete<any>(`${APIS.POMPES}/${id}`);
    }

    AddPompe(pompe: any) {
        return this.http.post<any>(`${APIS.POMPES}`, pompe);
    }
    AddPompeToStation(id:any ,pompe : any): Observable<any>  {
        
        return this.http.post<any>(
            `${APIS.POMPES}/addPompe`,
            {id,pompe}
         
        );
    }
    getPompesByStation(id : any) {
        return this.http.get<any>(
            `${APIS.POMPES}/getPompes/${id}`
         
        );
    }
    getventesByStation(id:any) {
        return this.http.get<any>(
            `${APIS.POMPES}/getvente/${id}`
         
        );
    }


}
