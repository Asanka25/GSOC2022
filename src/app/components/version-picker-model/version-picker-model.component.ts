import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/services/file.service';
import { VersionPickerRow, VersionService } from '../../services/version.service';


@Component({
  selector: 'app-version-picker-model',
  templateUrl: './version-picker-model.component.html',
  styleUrls: ['./version-picker-model.component.css']
})
export class VersionPickerModelComponent implements OnInit {


  displayedColumns: string[] = ['year', 'march', 'june', 'september','december'];
  public dataSource: any;
  public selectedReleases:string[]=[];


  constructor(private versionService:VersionService,private fileService:FileService) { 
    
  }

  ngOnInit(): void {
    // console.log("version picker");
    
    
      this.dataSource=this.versionService.getVersions();
      // console.log(data);
      
    
    // this.dataSource=this.versionService.getVersions();
    this.selectedReleases=[...this.versionService.selectedVersions];

  }

  versionClick(event:Event){
    let version:string =(event.target as HTMLElement).innerText;


    if (this.selectedReleases.includes(version)){
      this.selectedReleases=this.selectedReleases.filter(el => el!==version);
 

    }
    else
      if(version!="-"){
        this.selectedReleases.push(version);
        this.selectedReleases.sort((a,b) => (a > b ? -1 : 1));
      }
  }


  isVersionSelected(version:string){
    if (this.selectedReleases.includes(version) && version!="-"){
      return true;

    }
    return false;

  }

  submitVersion(){

    this.versionService.selectedVersions=this.selectedReleases;
    this.versionService.emit(this.versionService.selectedVersions); 
    this.fileService.createVersionFileMap().then(()=>{
    this.fileService.createCommonFileSet() //create common fildata set
    this.versionService.updateIsVersionSelected(true)

    })                                              

  }

}
