import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlerteService } from 'app/shared/services/alertes.service';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {
alerts:any;
  constructor(private alerteService: AlerteService, private route: ActivatedRoute,     
    public dialog: MatDialog,) { }

  ngOnInit(): void {
    this.getAlerts();
  }

  displayedColumns: string[] = [
    "title",
    "message",
    "date",
    "actions"

  ];
getAlerts(){
  const connectedUser = localStorage.getItem("connectedId");

this.alerteService.getAlertsByuser(connectedUser).subscribe(res=>{
this.alerts=new MatTableDataSource<any>(res)

})

}
  
}
