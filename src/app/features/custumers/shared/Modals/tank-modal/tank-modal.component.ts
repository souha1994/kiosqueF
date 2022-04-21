import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import * as XLSX from 'ts-xlsx';

export class jogTable {
    capacity:number;
    valuecm: number;
    valueL: number;
  }
@Component({
    selector: "app-tank-modal",
    templateUrl: "./tank-modal.component.html",
    styleUrls: ["./tank-modal.component.scss"],
})
export class TankModalComponent implements OnInit {
    AddTankForm: FormGroup;
    title = "XlsRead";
    file: File;
    arrayBuffer: any;
    filelist: any;
    constructor(public dialogRef: MatDialogRef<TankModalComponent>
      ,@Inject(MAT_DIALOG_DATA) public data: any
      ) {}

    ngOnInit(): void {
        this.initForm();
    }

    initForm(): void {
        this.AddTankForm = new FormGroup({
            capacity: new FormControl(this.data?.data ? this.data.data.capacity : "" , Validators.required ),
            min: new FormControl(this.data?.data ? this.data.data.min : "" , Validators.required ),
            max: new FormControl(this.data?.data ? this.data.data.max : "" , Validators.required ),
            type: new FormControl(this.data?.data ? this.data.data.type : "" , Validators.required ),
            deviceRef: new FormControl(this.data?.data ? this.data.data.deviceRef : "" , Validators.required ),
        });
    }
    addfile(event) {
        this.file = event.target.files[0];
        let fileReader = new FileReader();
        fileReader.readAsArrayBuffer(this.file);
        fileReader.onload = (e) => {
          this.arrayBuffer = fileReader.result;
          var data = new Uint8Array(this.arrayBuffer);
          var arr = new Array();
          for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
          var bstr = arr.join("");
          var workbook = XLSX.read(bstr, { type: "binary" });
          var first_sheet_name = workbook.SheetNames[0];
          var worksheet = workbook.Sheets[first_sheet_name];
        //   console.log(XLSX.utils.sheet_to_json(worksheet, { raw: true }));
          var arraylist = XLSX.utils.sheet_to_json(worksheet);
          this.filelist = [jogTable];
    
          arraylist.forEach(element => {
            this.filelist.push(element);
            
          });
          this.filelist.shift();
       
     
    
        }
      }
    addTank(): void {
        this.dialogRef.close({value :this.AddTankForm.value,jogTables:this.filelist});
    }
    editTank():void{
              this.dialogRef.close(this.AddTankForm.value);

    }
}
