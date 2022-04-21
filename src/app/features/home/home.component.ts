import { Component, OnInit, OnDestroy } from "@angular/core";
import { startWith, map } from "rxjs/operators";
import { FormControl } from "@angular/forms";
import { Observable, Subscription } from "rxjs";
import { StationService } from "app/shared/services/station.service";
import { TankService } from "app/shared/services/tank.service";
import { ToastService } from 'app/shared/services/toast.service';

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit, OnDestroy {

    stations: any[];
    tanks: any[];

    stateCtrl = new FormControl();
    filteredStates: Observable<any[]>;
    checked = false;
    subscription: Subscription;

    ngOnInit(): void {
        this.getUserStations();
    }

    constructor(
        private stationService: StationService,
        private tankService: TankService,
        private toastService: ToastService
    ) {
        this.filteredStates = this.stateCtrl.valueChanges.pipe(
            startWith(""),
            map((state) =>
                state ? this._filterStates(state) : this.stations.slice()
            )
        );
    }
    ngOnDestroy(): void {
        // this.subscription.unsubscribe();
    }

    private _filterStates(value: string): any[] {
        const filterValue = value.toLowerCase();
        return this.stations.filter(
            (state) => state.city.toLowerCase().indexOf(filterValue) === 0
        );
    }

    getUserStations() {
        const connectedUser = localStorage.getItem("connectedId");
        this.stationService
            .getStationsByuser(connectedUser)
            .subscribe((result) => {
                this.stations = result.stationServices;
            });
    }

    getTanksByStation(id) {
        this.tankService.getLastHistoriqueByStation(id).subscribe(res => {
            this.tanks = res;
        })
    }

    changed(data, idTank) {
        if (data) {
            // launch
            this.tankService.launchCronByTank(idTank).subscribe(
                data => {
                    this.toastService.success("Cron Launched", "Sucess");
                }
            )
        }
    }

}
