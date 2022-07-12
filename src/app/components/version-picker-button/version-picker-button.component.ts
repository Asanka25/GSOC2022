import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { VersionPickerModelComponent } from 'src/app/components/version-picker-model/version-picker-model.component';
import { VersionService } from 'src/app/services/version.service';



@Component({
  selector: 'app-version-picker-button',
  templateUrl: './version-picker-button.component.html',
  styleUrls: ['./version-picker-button.component.css']
})
export class VersionPickerButtonComponent implements AfterViewInit {
  // @ViewChild(VersionPickerModelComponent) childComponentRef:VersionPickerModelComponent;
  
  public isVersionSelected:Boolean=false; 
  constructor(private _dialog:MatDialog,private _versionService:VersionService)  {

   }

   ngAfterViewInit(): void {
    //  this.childComponentRef.isVersionSelected=[];
   }

  ngOnInit(): void {
    this._versionService.isVersionSelected$.subscribe(value=>{
      this.isVersionSelected=value;
    })
    // console.log("is version selected in button",this.isVersionSelected)
  }



  openVersionPickerModel(){
    // console.log("clicked")
    const dialogConfig=new MatDialogConfig();
    dialogConfig.width="600px";
    this._dialog.open(VersionPickerModelComponent);
  }

}


