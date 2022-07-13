import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { VersionPickerModelComponent } from 'src/app/components/version-picker-model/version-picker-model.component';
import { VersionService } from 'src/app/services/version.service';



@Component({
  selector: 'app-version-picker-button',
  templateUrl: './version-picker-button.component.html',
  styleUrls: ['./version-picker-button.component.css']
})
export class VersionPickerButtonComponent implements OnInit {
  public finalSelectedVersions:string[]=[];
  
  public isVersionSelected:Boolean=false; 
  constructor(private _dialog:MatDialog,private _versionService:VersionService)  {

   }



  ngOnInit(): void {
    this._versionService.isVersionSelected$.subscribe(value=>{
      this.isVersionSelected=value;
    })
         
    this._versionService.on().subscribe(data=>{
      this.finalSelectedVersions=data;
    })
          


  }



  openVersionPickerModel(){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.width="600px";
    this._dialog.open(VersionPickerModelComponent);
  }

}


