import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pistolet-modal',
  templateUrl: './pistolet-modal.component.html',
  styleUrls: ['./pistolet-modal.component.scss']
})
export class PistoletModalComponent implements OnInit {

  public AddPistoletForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<PistoletModalComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
   
    this.initForm();
    
  }

initForm(){
  const isdisaybled = this.data?.data  ? true : false ;

  this.AddPistoletForm = new FormGroup({
    name: new FormControl( this.data?.data ? this.data.data.name : "" , Validators.required ),
      type: new FormControl(this.data?.data ? this.data.data.type : "" , Validators.required ),

  });
}

addPistolet(): void {
  this.dialogRef.close(this.AddPistoletForm.value);
}


EditPistolet(): void {
  this.dialogRef.close(this.AddPistoletForm.value);
}
}
