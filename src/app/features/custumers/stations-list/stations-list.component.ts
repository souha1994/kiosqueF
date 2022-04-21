import {
    Component,
    OnInit,
    Output,
    EventEmitter,
    ViewChild,
    ViewEncapsulation,
    SimpleChanges,
} from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { fuseAnimations } from "@fuse/animations";
import { MatTableDataSource } from "@angular/material/table";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "app/shared/services/user.service";
import { MatDialog } from "@angular/material/dialog";
import { StationModalComponent } from "../shared/Modals/station-modal/station-modal.component";
import { StationService } from "app/shared/services/station.service";
import { ConfirmationModalComponent } from "app/shared/components/confirmation-modal/confirmation-modal.component";
import { ToastService } from 'app/shared/services/toast.service';

@Component({
    selector: "app-stations-list",
    templateUrl: "./stations-list.component.html",
    styleUrls: ["./stations-list.component.scss"],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
})
export class StationsListComponent implements OnInit {
    @Output() openConfirmationModalEvent: EventEmitter<any> = new EventEmitter<
    any
    >();
    @ViewChild(MatPaginator) paginator: MatPaginator;
    
    stationDataSource: MatTableDataSource<any>;
    displayedColumns: string[] = [
        "name",
        "street",
        "city",
        "zipcode",
        "department",
        "actions",
    ];
    constructor(
        private route: ActivatedRoute,
        public dialog: MatDialog,
        private stationservice: StationService,
        private toastService: ToastService
    ) {}

    ngOnInit(): void {
        this.initForm();
    }

  
    initForm(): void {
        this.route.paramMap.subscribe((routes: any) => {
            this.stationservice
                .getStationsByuser(routes.params.id)
                .subscribe((data) => {
                    this.stationDataSource = new MatTableDataSource<any>(
                        data.stationServices
                    );
                });
        });
    }
    ngOnChanges(changes: SimpleChanges): void {
        if (changes["stationDataSource"].currentValue != undefined) {
            this.stationDataSource.paginator = this.paginator;
        }
    }

    openStationModal(): void {
        const dialogRef = this.dialog.open(StationModalComponent, {
            width: "590px",
            height: "490px",
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.route.paramMap.subscribe((routes: any) => {
                    this.stationservice
                        .AddStationTouser(routes.params.id, result)
                        .subscribe((data) => {
                            this.toastService.success("Station Added", "Sucess");

                            this.initForm();
                        },
                        err=>{
                            this.toastService.error("error", "check informations");

                        });
                });
            }
        });
    }

    openEditStationModal(data): void {
        const dialogRef = this.dialog.open(StationModalComponent, {
            width: "590px",
            height: "490px",
            data: { data: data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.stationservice
                    .putStation(result, data._id)
                    .subscribe((res) => {
                        this.toastService.success("Station Edited", "Sucess");
                        this.initForm();
                    },
                    err=>{
                        this.toastService.error("error", "check informations");

                    });
            }
        });
    }

    openConfirmationModal(data): void {
        const dialogRef = this.dialog.open(ConfirmationModalComponent, {
            panelClass: "confirm-dialog-container",
            width: "390px",

            data: {
                IdData: data,
            },
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.stationservice
                    .DeleteStation(data)
                    .subscribe((data2: any) => {
                        this.toastService.success("Station Deleted", "Sucess");
                        console.log(data2);
                        this.initForm();
                    },
                    err=>{
                        this.toastService.error("error", "check informations");

                    });
            }
        });
    }
}
