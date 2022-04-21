import { Component, OnInit, Output, EventEmitter, ViewChild, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { PistoletService } from 'app/shared/services/pistolet.service';
import { PompeService } from 'app/shared/services/pompe.service';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { PistoletModalComponent } from '../shared/Modals/pistolet-modal/pistolet-modal.component';
import { ConfirmationModalComponent } from 'app/shared/components/confirmation-modal/confirmation-modal.component';
import { fuseAnimations } from '@fuse/animations';
import { ToastService } from 'app/shared/services/toast.service';

@Component({
  selector: 'app-list-pistolets',
  templateUrl: './list-pistolets.component.html',
  styleUrls: ['./list-pistolets.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations,
})
export class ListPistoletsComponent implements OnInit {

  @Output() openConfirmationModalEvent: EventEmitter<any> = new EventEmitter<any>();
  PistoletDataSource: MatTableDataSource<any>;
  constructor(
    private route: ActivatedRoute,
    private pistoletService: PistoletService,
    public dialog: MatDialog,
    private toastService: ToastService,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = [
    "name",
    "type",
    "actions"

  ];
  initForm(): void {
    this.route.paramMap.subscribe((routes: any) => {
      this.pistoletService.getPistoletByPompe(routes.params.id).subscribe(data => {
        this.PistoletDataSource = new MatTableDataSource<any>(data.pistolets);
      });
    })
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes["PistoletDataSource"].currentValue != undefined) {
      this.PistoletDataSource.paginator = this.paginator;
    }
  }
  openEditPistoletModal(data): void {
    const dialogRef = this.dialog.open(PistoletModalComponent, {
      width: '590px',
      height: '490px',
      data: { data: data }
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.pistoletService.putPistolet(result, data._id).subscribe((data2) => {
        console.log(data2);
        this.toastService.success("Pistolet Edited", "Sucess");
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
        this.pistoletService.DeletePistolet(data).subscribe((data2) => {
          console.log(data2);
          this.toastService.success("Pistolet Deleted", "Sucess");
          this.initForm();
        },
          err => {
            this.toastService.error("error", "Delete failed");
          });
      }
    });
  }
  openPistoletModal(): void {
    const dialogRef = this.dialog.open(PistoletModalComponent, {
      width: '390px',
      height: '390px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.route.paramMap.subscribe((routes: any) => {
          this.pistoletService.AddPistoletToPompe(routes.params.id, result).subscribe(data => {
            this.toastService.success("Pistolet Added", "Sucess");

            this.initForm();
          }, err => {
            this.toastService.error("error", "Add failed");
          });

        });
      }
    });
  }

}
