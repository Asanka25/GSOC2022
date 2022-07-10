import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { VersionPickerModelComponent } from 'src/app/version-picker-model/version-picker-model.component';



@Component({
  selector: 'app-version-picker-button',
  templateUrl: './version-picker-button.component.html',
  styleUrls: ['./version-picker-button.component.css']
})
export class VersionPickerButtonComponent implements AfterViewInit {
  // @ViewChild(VersionPickerModelComponent) childComponentRef:VersionPickerModelComponent;
  

  constructor(public dialog:MatDialog)  {
    // this.childComponentRef=VersionPickerModelComponent;
   }

   ngAfterViewInit(): void {
    //  this.childComponentRef.isVersionSelected=[];
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


