import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { APIS } from "app/config";
import { Observable } from 'rxjs';

@Injectable({ providedIn: "root" })
export class RavitaillementService {
    constructor(private http: HttpClient) { }
    getbytank(idtank: any) {
        return this.http.get<any>(`${APIS.RAVITAILLEMENT}/bytank/${idtank}`);
    }
    addbytank(idtank: any , ravitaillment : any) {
        return this.http.post<any>(`${APIS.RAVITAILLEMENT}/bytank/${idtank}`,ravitaillment);
    }
    putRavitaillement(idtank: any, ravitaillment : any) {
        return this.http.put<any>(`${APIS.RAVITAILLEMENT}/${idtank}`,ravitaillment);
    }
}
