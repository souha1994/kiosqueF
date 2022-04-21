import { Component, OnInit } from '@angular/core';
import { IndexModalComponent } from '../index-modal/index-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { PompeService } from 'app/shared/services/pompe.service';
import { PistoletService } from 'app/shared/services/pistolet.service';
import { HistoriqueIndexeService } from 'app/shared/services/historiqueIndexes.service';
import { ToastService } from 'app/shared/services/toast.service';
import { StationService } from 'app/shared/services/station.service';
enum typePistol {
    ESCENCE = 1,
    MAZOUT,
    PRENUIM,
}
@Component({
    selector: 'app-pompes-list',
    templateUrl: './pompes-list.component.html',
    styleUrls: ['./pompes-list.component.scss']
})
export class PompesListComponent implements OnInit {
    historique:any;
    own_kiosques = [];
    constructor(public dialog: MatDialog,
        private router: Router,
        private route: ActivatedRoute,
        private pompeService: PompeService,
        private pistoletService: PistoletService,
        private historiqueIndexes: HistoriqueIndexeService,
        private toastService: ToastService,
        private stationService: StationService,
        ) { }


    ngOnInit(): void {
        // get Kiosques 
        this.getPompes();
    }
    getPompes() {

        this.route.paramMap.subscribe((routes: any) => {
            this.pompeService.getPompesByStation(routes.params.id).subscribe(data => {
                data.pompes.forEach(element => {
                    this.pistoletService.getPistoletByPompe(element._id).subscribe(res => {
                        this.own_kiosques.push(res);
                    })
                });
            })
        })
    }
addVente(){
    this.route.paramMap.subscribe((routes: any) => {
        this.stationService.AddVente(routes.params.id).subscribe(data=>{
            console.log(data);
        })
    })
}

    addIndexModal(id:any): void {
        this.historiqueIndexes.getVenteByPistolet(id).subscribe(res=>{
            console.log(res);
            this.historique  =res;
            this.historique=this.historique.pop();
            })
        const dialogRef = this.dialog.open(IndexModalComponent, {
            width: '590px',
            height: '490px',
            data: { id: id },
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.historiqueIndexes.AddIndexToPistolet(id, result).subscribe(res => {
                    this.toastService.success("Index added", "Sucess");

                },err=>{
                    this.toastService.error("error", "check informations");

                })
            }
        });
    }

}
