import { Component, OnInit } from '@angular/core';
import { VersionService } from '../services/version.service';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  public finalSelectedVersions:string[]=[];
  // public tabNumber:string="";

  constructor(private versionService:VersionService) {
   }

  ngOnInit(): void {
    // this.finalSelectedVersions=this.versionService.finalSelectedVersions;
    this.versionService.on<string[]>().subscribe(
      data=>{
        this.finalSelectedVersions=data;
      }
    )
    // console.log("oninit")
  }


  setFinalSelectedVersions(finalSelectedVersions : string[]){

    this.finalSelectedVersions=finalSelectedVersions;

  }

}
