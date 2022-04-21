import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { APIS } from "app/config";
import { Observable } from 'rxjs';

@Injectable({ providedIn: "root" })
export class AlerteService {
    constructor(private http: HttpClient) { }

    getAllAlerts() {
        return this.http.get<any>(`${APIS.SUBSCRIBE}`);
    }
    getAlertsByuser(iduser) {
        return this.http.get<any>(`${APIS.SUBSCRIBE}/${iduser}`);
    }
    subscribes(iduser:any){
        let res={"endpoint":"https://fcm.googleapis.com/fcm/send/dg7C6yF9gJQ:APA91bGfZahe2nWtIO1MXePIl5XD_LCpo9h2aCxui3Fx5F8d7m7rh0g5jQA-jxONDJtNJ6Ii0zoQIHpb97s_wbiWYGMNldJZ5g5clHQSFaUG8RsNQNg8e8AQBF6gWorv4IM1GTDus2XZ","expirationTime":null,"keys":{"p256dh":"BDi4p_U7w2dKK7R67vNzGJa6msAv2qNTtT6F3J0_YWwGdGJ76YY5ms5fAyQsVISafBsUR5BFAsX8aej_7BScqYs","auth":"Z9vOC71lJ6_E1FunLoqs-Q"},"message":"Tank check your tanks you have a low tank","title":"Alert Notification","idUser":iduser};
        return this.http.post<any>(
         `${APIS.SUBSCRIBE}`,res      
     );
     
         }
         subscribesRavitaillment(iduser:any){
            let res={"endpoint":"https://fcm.googleapis.com/fcm/send/dg7C6yF9gJQ:APA91bGfZahe2nWtIO1MXePIl5XD_LCpo9h2aCxui3Fx5F8d7m7rh0g5jQA-jxONDJtNJ6Ii0zoQIHpb97s_wbiWYGMNldJZ5g5clHQSFaUG8RsNQNg8e8AQBF6gWorv4IM1GTDus2XZ","expirationTime":null,"keys":{"p256dh":"BDi4p_U7w2dKK7R67vNzGJa6msAv2qNTtT6F3J0_YWwGdGJ76YY5ms5fAyQsVISafBsUR5BFAsX8aej_7BScqYs","auth":"Z9vOC71lJ6_E1FunLoqs-Q"},"message":"You Have added ravitaillment check your tank","title":"Sucess Notification","idUser":iduser}
            return this.http.post<any>(
             `${APIS.SUBSCRIBE}`,res      
         );
         
             }
   

}
