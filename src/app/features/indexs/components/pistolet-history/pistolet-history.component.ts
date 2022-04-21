import { Component, OnInit, ViewChild, SimpleChanges } from '@angular/core';
import { HistoriqueIndexeService } from 'app/shared/services/historiqueIndexes.service';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationModalComponent } from 'app/shared/components/confirmation-modal/confirmation-modal.component';
import { IndexModalComponent } from '../index-modal/index-modal.component';

@Component({
  selector: 'app-pistolet-history',
  templateUrl: './pistolet-history.component.html',
  styleUrls: ['./pistolet-history.component.scss']
})
export class PistoletHistoryComponent implements OnInit {
  historiqueDataSource: any;

  constructor(private historiqueIndexes: HistoriqueIndexeService, private route: ActivatedRoute,     
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getallIndexes();
  }
  getallIndexes(): void {
    this.route.paramMap.subscribe((routes: any) => {
      this.historiqueIndexes
        .getIndexessByPistolet(routes.params.id)
        .subscribe(
          (data) =>{
            (this.historiqueDataSource = new MatTableDataSource<any>(data.historiqueIndexes))}
        );
    })
  }
  

  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = [
      "date",
      "typePoste",
      "indexdebut",
      "indexfin",
      "actions",
    ];
  ngOnChanges(changes: SimpleChanges): void {
    if (changes["historiqueDataSource"].currentValue != undefined) {
        this.historiqueDataSource.paginator = this.paginator;
    }
};
openEditIndexModal(data): void {
  const dialogRef = this.dialog.open(IndexModalComponent, {
      width: "590px",
      height: "490px",
      data: { data: data },
  });
  dialogRef.afterClosed().subscribe((result) => {
      if (result) {
          this.historiqueIndexes
              .putIndex(result, data._id)
              .subscribe((res) => {
                  this.getallIndexes();
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
          this.historiqueIndexes
              .DeleteIndex(data)
              .subscribe(data2 => {
                console.log(data2)
                  this.getallIndexes();
              });
      }
  });
}
}
