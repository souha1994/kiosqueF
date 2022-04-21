import { Component, OnInit, Inject } from '@angular/core';
import { UserModalComponent } from '../user-modal/user-modal.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'app/shared/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-station-modal',
  templateUrl: './station-modal.component.html',
  styleUrls: ['./station-modal.component.scss']
})
export class StationModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<StationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    
    ) { }
  AddStationForm: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){

    this.AddStationForm = new FormGroup({
      name: new FormControl(this.data?.data ? this.data.data.name : "" , Validators.required ),
      street: new FormControl(this.data?.data ? this.data.data.street : "" , Validators.required ),
      city: new FormControl(this.data?.data ? this.data.data.city : "" , Validators.required ),
      zipcode: new FormControl(this.data?.data ? this.data.data.zipcode : "" , Validators.required ),
      department: new FormControl(this.data?.data ? this.data.data.department : "" , Validators.required ),
      post: new FormControl(this.data?.data ? this.data.data.post : "" , Validators.required ),
  });
  }
  addstation(){
    this.dialogRef.close(this.AddStationForm.value);
   
  }
  Editstation(){
    this.dialogRef.close(this.AddStationForm.value);
   
  }

}
