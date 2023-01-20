import { Component, OnInit ,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface ColorData {
  color: string;
}

@Component({
  selector: 'app-set-background-dialog',
  templateUrl: './set-background-dialog.component.html',
  styleUrls: ['./set-background-dialog.component.css']
})
export class SetBackgroundDialogComponent implements OnInit{


    constructor(
      public dialogRef: MatDialogRef<SetBackgroundDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: ColorData,
    ) {}

    ngOnInit(){
      //this.color ='';
    }
  
    onNoClick(): void {
      this.dialogRef.close();
    }

}
