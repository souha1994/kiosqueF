import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { APIS } from "app/config";
import { Observable } from 'rxjs';

@Injectable({ providedIn: "root" })
export class VenteService {
    constructor(private http: HttpClient) { }

    getAllventes() {
        return this.http.get<any>(`${APIS.VENTES}`);
    }

    putvente(vente: any, id: any) {
        return this.http.put<any>(`${APIS.VENTES}/${id}`, vente);
    }

    Deletevente(id: any) {
        return this.http.delete<any>(`${APIS.VENTES}/${id}`);
    }

    Addvente(vente: any) {
        return this.http.post<any>(`${APIS.VENTES}`, vente);
    }
    AddventeToStation(id: any, vente: any): Observable<any> {

        return this.http.post<any>(
            `${APIS.VENTES}/addvente`,
            { id, vente }

        );
    }
    getventesByStation(id: any) {
        return this.http.get<any>(
            `${APIS.VENTES}/last24/${id}`

        );
    }
   
    getventesByPoste(id: any) {
        return this.http.get<any>(
            `${APIS.VENTES}/getVenteByposte/${id}`

        );
    }
    getventesByType(id: any) {
        return this.http.get<any>(
            `${APIS.VENTES}/getVenteBytype/${id}`

        );
    }

}
