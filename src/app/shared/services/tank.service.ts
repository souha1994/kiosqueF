import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { APIS } from "app/config";
import { Observable } from 'rxjs';

@Injectable({ providedIn: "root" })
export class TankService {
    constructor(private http: HttpClient) {}

    getTanks() {
        return this.http.get<any>(`${APIS.TANKS}`);
    }

    putTank(tank: any,id :any) {
        return this.http.put<any>(`${APIS.TANKS}/${id}`, tank);
    }

    DeleteTank(tank: any) {
        return this.http.delete<any>(`${APIS.TANKS}/${tank}`);
    }

    AddTank(tank: any) {
        return this.http.post<any>(`${APIS.TANKS}`, tank);
    }
    AddTankToStation(id:any ,tank : any,jogTables:any): Observable<any>  {
        
        return this.http.post<any>(
            `${APIS.TANKS}/addTank`,
            {id,tank,jogTables}
         
        );
    }
    getTanksByStation(id : any) {
        
        return this.http.get<any>(
            `${APIS.TANKS}/getTanks/${id}`
         
        );
    }

    getHistoriqueByidTank(id : any) {
        
        return this.http.get<any>(
            `${APIS.HISTORIQUE}/getHistorique/${id}`
         
        );
    }

    getHistoriqueByTanks(id : any) {
        return this.http.get<any>(
            `${APIS.HISTORIQUE}/getLastHistorique/${id}`,
        );
    }
    getHistoriqueByid(id : any) {
        return this.http.get<any>(
            `${APIS.HISTORIQUE}/gethistoriqueTank/${id}`,
        );
    }


    getLastHistoriqueByStation(id : any) {
        return this.http.get<any>(
            `${APIS.TANKS}/getHistorique/${id}`      
        );
    }
    
    launchCronByTank(id: string) {
        return this.http.get<any>(
            `${APIS.CRON}/${id}`      
        );
    }
   


}
