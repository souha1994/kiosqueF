import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { APIS } from "app/config";
import { Observable } from 'rxjs';

@Injectable({ providedIn: "root" })
export class PistoletService {
    constructor(private http: HttpClient) {}

    getAllPistolets() {
        return this.http.get<any>(`${APIS.PISTOLETS}`);
    }

    putPistolet(pistolet: any,id:any) {
        return this.http.put<any>(`${APIS.PISTOLETS}/${id}`, pistolet);
    }

    DeletePistolet(id: any) {
        return this.http.delete<any>(`${APIS.PISTOLETS}/${id}`);
    }

    AddPistolet(pistolet: any) {
        return this.http.post<any>(`${APIS.PISTOLETS}`, pistolet);
    }
    AddPistoletToPompe(id:any ,Pistolet : any): Observable<any>  {
        
        return this.http.post<any>(
            `${APIS.PISTOLETS}/addPistolet`,
            {id,Pistolet}
         
        );
    }
    getPistoletByPompe(id : any) {
        return this.http.get<any>(
            `${APIS.PISTOLETS}/getPistolets/${id}`
         
        );
    }


}
