import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastService } from 'app/shared/services/toast.service';
import { RavitaillementService } from 'app/shared/services/ravitaillement.service';
import { MatTableDataSource } from '@angular/material/table';
import { RavitaillementModalComponent } from '../ravitaillement-modal/ravitaillement-modal.component';
import { AlerteService } from 'app/shared/services/alertes.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.scss']
})
export class HistoriqueComponent implements OnInit {

  constructor(public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
   private toastService: ToastService,
   private ravitaillmentSerevice :RavitaillementService,
   private alerteService : AlerteService
    ) { }
    ravitaillments : any;
    displayedColumns: string[] = [
      "type",
      "quantite",
      "date",
      "actions"
  
    ];
  ngOnInit(): void {
    this.getRavitaillement();
  }
  getRavitaillement(){
    this.route.paramMap.subscribe((routes: any) => {
      this.ravitaillmentSerevice.getbytank(routes.params.id).subscribe(res=>{
        console.log(res);
        this.ravitaillments=new MatTableDataSource<any>(res);

      })
    })
  }
  
  addravitaillementModal(): void {
   
    const dialogRef = this.dialog.open(RavitaillementModalComponent, {
        width: '590px',
        height: '490px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      const connectedUser = localStorage.getItem("connectedId");

        if (result) {
          this.route.paramMap.subscribe((routes: any) => {
            this.ravitaillmentSerevice.addbytank(routes.params.id, result).subscribe(res => {
                this.toastService.success("Ravitaillement added", "Sucess");
                this.alerteService.subscribesRavitaillment(connectedUser).subscribe(res=>{
                  console.log (res);
                })

                this.getRavitaillement();
              
              })
            },err=>{
                this.toastService.error("error", "check informations");

            })
        }
    });
}

openEditravitaillmentModal(data): void {
   
  const dialogRef = this.dialog.open(RavitaillementModalComponent, {
      width: '590px',
      height: '490px',
      data: { data: data },
  });
  dialogRef.afterClosed().subscribe((result) => {

      if (result) {
          this.ravitaillmentSerevice.putRavitaillement(data._id, result).subscribe(res => {
              this.toastService.success("Ravitaillement added", "Sucess");
              
              this.getRavitaillement();
            
            
          },err=>{
              this.toastService.error("error", "check informations");

          })
      }
  });
}


}
