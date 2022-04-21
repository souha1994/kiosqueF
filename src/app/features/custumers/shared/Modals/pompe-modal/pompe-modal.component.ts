import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pompe-modal',
  templateUrl: './pompe-modal.component.html',
  styleUrls: ['./pompe-modal.component.scss']
})
export class PompeModalComponent implements OnInit {
  public AddPompeForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<PompeModalComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
   
    this.initForm();
    
  }

initForm(){
  const isdisaybled = this.data?.data  ? true : false ;

  this.AddPompeForm = new FormGroup({
      name: new FormControl( this.data?.data ? this.data.data.name : "" , Validators.required ),
  });
}

addPompe(): void {
  this.dialogRef.close(this.AddPompeForm.value);
}


EditPompe(): void {
  this.dialogRef.close(this.AddPompeForm.value);
}
}


