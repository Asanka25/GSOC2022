import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/services/file.service';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  public finalSelectedVersions:string[]=[];
  public sameFileForSelectedReleases=true;

  constructor(private versionService:VersionService,private _fileService:FileService) {

   }

  ngOnInit(): void {
    // this.finalSelectedVersions=this.versionService.finalSelectedVersions;
    this.versionService.on<string[]>().subscribe(
      data=>{
        this.finalSelectedVersions=data;
      }
    )
    this._fileService._sameFileForSelectedReleases$.subscribe(value=>{
      this.sameFileForSelectedReleases=value;
    })
  }


  // setFinalSelectedVersions(finalSelectedVersions : string[]){

  //   this.finalSelectedVersions=finalSelectedVersions;

  // }

}
