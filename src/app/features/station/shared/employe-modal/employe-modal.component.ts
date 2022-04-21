import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserModalComponent } from 'app/features/custumers/shared/Modals/user-modal/user-modal.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'app/shared/services/user.service';

@Component({
  selector: 'app-employe-modal',
  templateUrl: './employe-modal.component.html',
  styleUrls: ['./employe-modal.component.scss']
})
export class EmployeModalComponent implements OnInit {
  public AddUserForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<UserModalComponent>,
     private userService: UserService,  
     @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
   
    this.initForm();
    
  }

initForm(){
  const isdisaybled = this.data?.data  ? true : false ;

  this.AddUserForm = new FormGroup({
      firstName: new FormControl( this.data?.data ? this.data.data.firstName : "" , Validators.required ),
      lastName: new FormControl(
     this.data?.data ? this.data.data.lastName : "" , Validators.required),
      email: new FormControl(
        this.data?.data ? this.data.data.email : ""  ,  Validators.required),
      password: new FormControl(
        this.data?.data ? this.data.data.password : "",  Validators.required),
      phone: new FormControl( this.data?.data? this.data.data.phone : 0,  Validators.required),
      civility: new FormControl(
        this.data?.data? this.data.data.civility : ""),
      post: new FormControl(
        this.data?.data ? this.data.data.post : ""  ),
      socialReason: new FormControl(
        this.data?.data ? this.data.data.socialReason : "" ),
     
  });
}

adduser(): void {
  this.dialogRef.close(this.AddUserForm.value);
}


Edituser(): void {
  this.dialogRef.close(this.AddUserForm.value);
}
}
