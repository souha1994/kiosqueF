import {
    Component,
    OnInit,
    Output,
    EventEmitter,
    ViewEncapsulation,
    ViewChild,
    SimpleChanges,
} from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { fuseAnimations } from "@fuse/animations";
import { StationService } from "app/shared/services/station.service";
import { ActivatedRoute } from "@angular/router";
import { MatPaginator } from "@angular/material/paginator";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmationModalComponent } from "app/shared/components/confirmation-modal/confirmation-modal.component";
import { TankService } from "app/shared/services/tank.service";
import { TankModalComponent } from "../shared/Modals/tank-modal/tank-modal.component";
import { ToastService } from 'app/shared/services/toast.service';

@Component({
    selector: "app-tank-list",
    templateUrl: "./tanks-list.component.html",
    styleUrls: ["./tanks-list.component.scss"],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
})
export class TanksListComponent implements OnInit {
    @Output() openConfirmationModalEvent: EventEmitter<any> = new EventEmitter<
        any
    >();
    TankDataSource: MatTableDataSource<any>;
    constructor(
        private route: ActivatedRoute,
        private TankService: TankService,
        public dialog: MatDialog,
        private toastService: ToastService

    ) { }

    ngOnInit(): void {
        this.initForm();
    }

    @ViewChild(MatPaginator) paginator: MatPaginator;

    displayedColumns: string[] = [
        "capacity",
        "min",
        "max",
        "type",
        "deviceRef",
        "actions",
    ];

    initForm(): void {
        this.route.paramMap.subscribe((routes: any) => {
            this.TankService.getTanksByStation(routes.params.id).subscribe(
                (data) => {
                    this.TankDataSource = new MatTableDataSource<any>(
                        data.tanks
                    );
                }
            );
        });
    }
    ngOnChanges(changes: SimpleChanges): void {
        if (changes["TankDataSource"].currentValue != undefined) {
            this.TankDataSource.paginator = this.paginator;
        }
    }

    openEditTankModal(data): void {
        const dialogRef = this.dialog.open(TankModalComponent, {
            width: "590px",
            height: "490px",
            data: { data: data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.TankService.putTank(result, data._id).subscribe(res => {
                    this.toastService.success("Tank edited", "Sucess");
                    this.initForm();

                },
                    err => {
                        this.toastService.error("error", "check informations");

                    })

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
                this.TankService.DeleteTank(data).subscribe(
                    (data2: any) => {
                        this.toastService.success("Tank Deleted", "Sucess");

                        this.initForm();
                    }, err => {
                        this.toastService.error("error", "check informations");

                    }
                );
            }
        });
    }
    openTankModal(): void {
        const dialogRef = this.dialog.open(TankModalComponent, {
            width: "390px",
            height: "390px",
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.route.paramMap.subscribe((routes: any) => {
                    this.TankService.AddTankToStation(
                        routes.params.id,
                        result.value,
                        result.jogTables
                    ).subscribe((data) => {
                        this.toastService.success("Tank Added", "Sucess");

                        this.initForm();
                    }, err => {

                        this.toastService.error("error", "check informations");

                    });
                });
            }
        });
    }
}
