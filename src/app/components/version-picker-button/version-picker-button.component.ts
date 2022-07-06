import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { VersionPickerModelComponent } from 'src/app/version-picker-model/version-picker-model.component';



@Component({
  selector: 'app-version-picker-button',
  templateUrl: './version-picker-button.component.html',
  styleUrls: ['./version-picker-button.component.css']
})
export class VersionPickerButtonComponent implements OnInit {

  constructor(public dialog:MatDialog) {

   }

  ngOnInit(): void {
  }



  openVersionPickerModel(){
    console.log("clicked")
    const dialogConfig=new MatDialogConfig();
    dialogConfig.width="600px";
    this.dialog.open(VersionPickerModelComponent);
  }

}


