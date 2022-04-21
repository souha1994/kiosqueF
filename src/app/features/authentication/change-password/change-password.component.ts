import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FuseConfigService } from '@fuse/services/config.service';
import { UserService } from 'app/shared/services/user.service';
import { ToastService } from 'app/shared/services/toast.service';
import { Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations,
})
export class ChangePasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup;
  user : any;
  constructor(      private _fuseConfigService: FuseConfigService,
    private userservice : UserService
    , private toastService: ToastService,
    private router: Router,

  ) {
      this._fuseConfigService.config = {
        layout: {
            navbar   : {
                hidden: true
            },
            toolbar  : {
                hidden: true
            },
            footer   : {
                hidden: true
            },
            sidepanel: {
                hidden: true
            }
        }
    };
    this.forgotPasswordForm = new FormGroup(
      {
        Retypepassword: new FormControl(null, Validators.required),
        password: new FormControl(null, Validators.required),

      })

   }

  ngOnInit(): void {
    this.getConnected();
  }

  public  getConnected(){
    this.userservice.getuser().subscribe(data=>{
    this.user = data;
    console.log(data);
  });
 
 }

 public ResetPassword(){
if(this.forgotPasswordForm.value.password ==this.forgotPasswordForm.value.Retypepassword){
  console.log("True");

const UserT = this.user;

UserT.password =this.forgotPasswordForm.value.password  ;
console.log(UserT);
  this.userservice.edit(UserT, this.user._id).subscribe(
    user => {
      console.log(user);
        this.toastService.success("Password Edited", "Sucess");
        this.router.navigate( ['/authentication/login'] );

    },
    err => {
        this.toastService.error("error", "check informations");
    }
);
}
else {console.log("erreur");
this.toastService.error("error", "password Invalid");
}
console.log(this.user);

  
 }

}
