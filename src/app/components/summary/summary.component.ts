import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/services/file.service';
import { VersionService } from 'src/app/services/version.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  public selections: { [version: string] : string[] }={};
  public _sameFileForSelectedReleases: boolean=true;
  public selectedVersions:string[]=[];
  public finalSelectedVersions;


  constructor(private _fileService:FileService,private _versionService: VersionService) {
    this.finalSelectedVersions=this._versionService.selectedVersions;
    this._sameFileForSelectedReleases=_fileService.sameFileForSelectedReleases;
   }

  ngOnInit(): void {
    console.log("onit")
    this.selections=this._fileService.selections;
    for(let key in this.selections){
      if(this.selections[key].length==0){
   
        this.finalSelectedVersions = this.finalSelectedVersions.filter(obj =>  obj !== key);

      }

    }

    this.finalSelectedVersions=this.finalSelectedVersions.sort((a,b) => (a > b ? -1 : 1)); //sort keys in selections dictionary desc order
    console.log("finalselever",this.finalSelectedVersions)
    this._fileService._sameFileForSelectedReleases$.subscribe(value=>{
      this._sameFileForSelectedReleases=value;
      console.log("check",this._sameFileForSelectedReleases)
    })
  console.log("finalSelectedVersions",this.finalSelectedVersions)
  console.log("selections",this.selections)
  console.log("bool",this._sameFileForSelectedReleases)

  }

}
