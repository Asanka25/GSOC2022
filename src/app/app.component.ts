import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { MatRadioChange } from '@angular/material/radio';
import { SummaryComponent } from './components/summary/summary.component';
import { FileService } from './services/file.service';
import { VersionService } from './services/version.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'gsoc';

  private _sameFileForSelectedReleases=true;

  public isVersionSelected:Boolean=false; 
  constructor(private _versionService:VersionService,private _dialog:MatDialog,private _fileService:FileService){


  }

  ngOnInit(){
    this._versionService.isVersionSelected$.subscribe(value=>{
      this.isVersionSelected=value;
    })
    // console.log("is version",this.isVersionSelected)


    // let dict[]={"a":[],"b":[1,2]}
    // let dict: { [version: string] : string[] } = {"1":["abc"],"2":[],"3":["a","b","c"]};

    // console.log(dict)
    // delete dict["2"];
    // console.log(dict)

  }


  openSummaryModel(){
    // console.log("clicked")
    const dialogConfig=new MatDialogConfig();
    dialogConfig.width="250px";
    this._dialog.open(SummaryComponent);
  }


  radioChange(event: MatRadioChange) {
    // this.filter['property'] = event.value;
    console.log("mat radio changed")
    this._sameFileForSelectedReleases=event.value=="1"?true:false;
    // console.log(this._sameFileForSelectedReleases);
    this._fileService.setIsSelectAllReleases(this._sameFileForSelectedReleases);
    this._fileService.selections={};
    console.log("radio change",this._sameFileForSelectedReleases)

}


}
