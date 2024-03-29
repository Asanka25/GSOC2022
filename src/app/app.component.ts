import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { MatRadioChange } from '@angular/material/radio';
import { SummaryComponent } from './components/summary/summary.component';
import { File, FileService } from './services/file.service';
import { VersionService } from './services/version.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'gsoc';

  public sameFileForSelectedReleases=true;

  public isVersionSelected:Boolean=false; 
  constructor(private _versionService:VersionService,private _dialog:MatDialog,private _fileService:FileService){


  }

  ngOnInit(){
    console.log("app com");
    this._versionService.initVersions();
    this._versionService.isVersionSelected$.subscribe(value=>{
      this.isVersionSelected=value;
    })
  }


  openSummaryModel(){
    // console.log("clicked")
    const dialogConfig=new MatDialogConfig();
    dialogConfig.width="250px";
    this._dialog.open(SummaryComponent);
  }


  radioChange(event: MatRadioChange) {
 
    this.sameFileForSelectedReleases=event.value=="1"?true:false;
    this._fileService.setIsSelectAllReleases(this.sameFileForSelectedReleases);
    this._fileService.selections={};
    // this._fileService.createCommonFileSet()
    
  }

}
