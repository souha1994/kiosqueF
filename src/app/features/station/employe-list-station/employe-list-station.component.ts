import { Component, OnInit, ViewEncapsulation, SimpleChanges, ViewChild } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'app/shared/services/user.service';
import { ToastService } from 'app/shared/services/toast.service';
import { ConfirmationModalComponent } from 'app/shared/components/confirmation-modal/confirmation-modal.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeModalComponent } from '../shared/employe-modal/employe-modal.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employe-list-station',
  templateUrl: './employe-list-station.component.html',
  styleUrls: ['./employe-list-station.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations,
})
export class EmployeListStationComponent implements OnInit {
  userDataSource: any;

  constructor(public dialog: MatDialog, private userService: UserService, private toastService: ToastService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getallcustumers();

  }
  openEditUserModal(data): void {
    const dialogRef = this.dialog.open(EmployeModalComponent, {
        width: '590px',
        height: '490px',
        data: { data: data }

    });
    dialogRef.afterClosed().subscribe((result) => {
        if (result) {
            this.userService.edit(result, data._id).subscribe(
                user => {
                    this.toastService.success("User Edited", "Sucess");

                },
                err => {
                    this.toastService.error("error", "check informations");
                }
            );
        }
    });
}
openAddUserModal(): void {
    const dialogRef = this.dialog.open(EmployeModalComponent, {
        width: '590px',
        height: '490px',
    });
    dialogRef.afterClosed().subscribe((result) => {
        if (result) {
            this.route.paramMap.subscribe((routes:any)=>{
            this.userService.AddEmployee(result,routes.params.id).subscribe(
                user => {
                    if (user) {
                        this.toastService.success("User added", "Sucess");
                        this.getallcustumers();
                    }})
                },
                error => {
                    this.toastService.error("error", "check informations");
                }
            );
        }
    });
}

getallcustumers(): void {
    this.route.paramMap.subscribe((routes:any)=>{
    this.userService.getEmployees(routes.params.id).subscribe(data=>{
        console.log(data);
        this.userDataSource = new MatTableDataSource<any>(data);
           
            });
            
    });}


@ViewChild(MatPaginator) paginator: MatPaginator;

displayedColumns: string[] = [
    "firstName",
    "lastName",
    "email",
    "phone",
    "civility",
    "post",
    "socialReason",
    "actions",
];

ngOnChanges(changes: SimpleChanges): void {
    if (changes["userDataSource"].currentValue != undefined) {
        this.userDataSource.paginator = this.paginator;
    }
};


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
            this.userService.delete(data._id).subscribe(
                (data2: any) => {
                    this.toastService.success("User added", "Sucess");
                    this.getallcustumers();
                },
                err=>{
                    this.toastService.error("error", "error while delete");

                }
                );
        }
    });
}
}
