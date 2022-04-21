import { Component, OnInit, Inject } from '@angular/core';
import { RavitaillementService } from 'app/shared/services/ravitaillement.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ravitaillement-modal',
  templateUrl: './ravitaillement-modal.component.html',
  styleUrls: ['./ravitaillement-modal.component.scss']
})
export class RavitaillementModalComponent implements OnInit {
  hour: any;
  disabled =false;
  date : any;
  types:any=[
    { value: 'ESSENCE', viewValue: 'Essence' },
    { value: 'DISEL', viewValue: 'Disel' } 

  ];
  
  public AddHistoriqueRavitaillement: FormGroup;

  constructor(public dialogRef: MatDialogRef<RavitaillementModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ravitaillementService : RavitaillementService) { }

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
    this.AddHistoriqueRavitaillement = new FormGroup({
      date: new FormControl(this.data?.data ? this.data.data.date : "", Validators.required),
      quantite: new FormControl(
        this.data?.data ? this.data.data.quantite : "", Validators.required),
      type: new FormControl(
        this.data?.data ? this.data.data.type : "", Validators.required),
      
      
    });
    
  }

  addHistorique(): void {
    this.dialogRef.close(this.AddHistoriqueRavitaillement.value);
  }
  
  EditHistorique(): void {
    this.dialogRef.close(this.AddHistoriqueRavitaillement.value);
  }

}
