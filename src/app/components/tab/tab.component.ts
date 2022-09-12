import { Component, OnInit } from '@angular/core';
import { MatCardLgImage } from '@angular/material/card';
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
  public tabNumber="xxx";
  constructor(private versionService:VersionService,private _fileService:FileService) {
      // console.log("tab inside consctructor");
      
   }

  ngOnInit(): void {
    // console.log("tab init");
    
    this.versionService.on().subscribe(
      data=>{
        this.finalSelectedVersions=data;
      }
    )

    this._fileService._sameFileForSelectedReleases$.subscribe(value=>{
      this.sameFileForSelectedReleases=value;
    })
  // console.log("tab inside contructor",this.finalSelectedVersions);

  }


}
