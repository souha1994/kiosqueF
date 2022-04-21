import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { APIS } from "app/config";
import { Observable } from 'rxjs';

@Injectable({ providedIn: "root" })
export class HistoriqueIndexeService {
    constructor(private http: HttpClient) {}

    getAllIndexes() {
        return this.http.get<any>(`${APIS.HISTORIQUEINDEXE}`);
    }

    putIndex(pompe: any, id: any) {
        return this.http.put<any>(`${APIS.HISTORIQUEINDEXE}/${id}`, pompe);
    }

    DeleteIndex(id: any) {
        return this.http.delete<any>(`${APIS.HISTORIQUEINDEXE}/${id}`);
    }

    AddIndex(pompe: any) {
        return this.http.post<any>(`${APIS.HISTORIQUEINDEXE}`, pompe);
    }
    AddIndexToPistolet(id:any ,historiqueIndexes : any): Observable<any>  {
        
        return this.http.post<any>(
            `${APIS.HISTORIQUEINDEXE}/addIndexe/${id}`,
            historiqueIndexes
         
        );
    }
    getIndexessByPistolet(id : any) {
        return this.http.get<any>(
            `${APIS.HISTORIQUEINDEXE}/getHistorique/${id}`
        );
    }
    getVenteByPistolet(id : any) {
        return this.http.get<any>(
            `${APIS.HISTORIQUEINDEXE}/getVentes/${id}`
        );
    }


}
