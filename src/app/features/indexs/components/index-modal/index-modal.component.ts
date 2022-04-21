import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HistoriqueIndexeService } from 'app/shared/services/historiqueIndexes.service';


@Component({
  selector: 'app-index-modal',
  templateUrl: './index-modal.component.html',
  styleUrls: ['./index-modal.component.scss']
})
export class IndexModalComponent implements OnInit {
  hour: any;
  disabled =false;
  date : any;
  posts:any=[
    { value: 'Post1', viewValue: '06-14' },
    { value: 'Post2', viewValue: '14-22' } ,
    { value: 'Post3', viewValue: '22-06' }

  ];
  
  public AddHistoriqueIndex: FormGroup;

  constructor(public dialogRef: MatDialogRef<IndexModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    historiqueIndexService : HistoriqueIndexeService) { }

  ngOnInit(): void {
    this.initForm();
  }

  postsfix(type : any) {
    if (!this.data.data){
      this.disabled = true;
      let d ;
     d = new Date().toISOString().slice(1, 10)
      this.hour = parseInt(new Date().toISOString().slice(11, 22)) + 1;

    }
    console.log(this.hour)

  }

  initForm() {
    const isdisaybled = this.data?.data ? true : false;
    this.AddHistoriqueIndex = new FormGroup({
      date: new FormControl(this.data?.data ? this.data.data.date : "", Validators.required),
      typePoste: new FormControl(
        this.data?.data ? this.data.data.typePoste : "", Validators.required),
      indexdebut: new FormControl(
        this.data?.data ? this.data.data.indexdebut : "", Validators.required),
      indexfin: new FormControl(
        this.data?.data ? this.data.data.indexfin : "", Validators.required),
    });
  }

  addHistorique(): void {
    this.dialogRef.close(this.AddHistoriqueIndex.value);
  }
  
  EditHistorique(): void {
    this.dialogRef.close(this.AddHistoriqueIndex.value);
  }
}
