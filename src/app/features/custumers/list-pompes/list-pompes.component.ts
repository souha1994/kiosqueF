import {
    Component,
    OnInit,
    ViewEncapsulation,
    Output,
    EventEmitter,
    ViewChild,
    SimpleChanges,
} from "@angular/core";
import { fuseAnimations } from "@fuse/animations";
import { MatTableDataSource } from "@angular/material/table";
import { ActivatedRoute } from "@angular/router";
import { StationService } from "app/shared/services/station.service";
import { PompeService } from "app/shared/services/pompe.service";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { PompeModalComponent } from "../shared/Modals/pompe-modal/pompe-modal.component";
import { ConfirmationModalComponent } from "app/shared/components/confirmation-modal/confirmation-modal.component";
import { ToastService } from 'app/shared/services/toast.service';

@Component({
    selector: "app-list-pompes",
    templateUrl: "./list-pompes.component.html",
    styleUrls: ["./list-pompes.component.scss"],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
})
export class ListPompesComponent implements OnInit {
    @Output() openConfirmationModalEvent: EventEmitter<any> = new EventEmitter<
        any
    >();
    PompeDataSource: MatTableDataSource<any>;
    constructor(
        private route: ActivatedRoute,
        private stationService: StationService,
        private pompeService: PompeService,
        private toastService: ToastService,

        public dialog: MatDialog
    ) { }

    ngOnInit(): void {
        this.initForm();
    }

    @ViewChild(MatPaginator) paginator: MatPaginator;

    displayedColumns: string[] = ["name", "actions"];

    initForm(): void {
        this.route.paramMap.subscribe((routes: any) => {
            this.pompeService
                .getPompesByStation(routes.params.id)
                .subscribe((data) => {
                    this.PompeDataSource = new MatTableDataSource<any>(
                        data.pompes
                    );
                });
        });
    }
    ngOnChanges(changes: SimpleChanges): void {
        if (changes["PompeDataSource"].currentValue != undefined) {
            this.PompeDataSource.paginator = this.paginator;
        }
    }

    openEditPompeModal(data): void {
        const dialogRef = this.dialog.open(PompeModalComponent, {
            width: "590px",
            height: "490px",
            data: { data: data },
        });
        dialogRef.afterClosed().subscribe((result) => {

            this.pompeService.putPompe(result, data._id).subscribe((data2: any) => {
                this.toastService.success("Pompe Edited", "Sucess");
                this.initForm();
            },
                err => {
                    this.toastService.error("error", "Edit failed");
                });
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
                this.pompeService
                    .DeletePompe(data)
                    .subscribe((data2) => {
                        console.log(data2)
                        this.toastService.success("Pompe Deleted", "Sucess");
                        this.initForm();
                    }, err => {
                        this.toastService.error("error", "Delete failed");
                    });
            }
        });
    }
    openPompeModal(): void {
        const dialogRef = this.dialog.open(PompeModalComponent, {
            width: "390px",
            height: "390px",
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.route.paramMap.subscribe((routes: any) => {
                    this.pompeService
                        .AddPompeToStation(routes.params.id, result)
                        .subscribe((data) => {
                            this.toastService.success("Pompe Added", "Sucess");

                            this.initForm();
                        },
                            err => {
                                this.toastService.error("error", "Add failed");

                            });
                });
            }
        });
    }
}
