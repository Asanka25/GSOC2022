import { Component, OnInit } from '@angular/core';
import { VersionPickerColumn, VersionService } from '../../services/version.service';


@Component({
  selector: 'app-version-picker-model',
  templateUrl: './version-picker-model.component.html',
  styleUrls: ['./version-picker-model.component.css']
})
export class VersionPickerModelComponent implements OnInit {


  displayedColumns: string[] = ['year', 'march', 'june', 'september','december'];
  public dataSource: VersionPickerColumn[]=[];
  public selectedReleases:string[]=[];



  constructor(private versionService:VersionService) { 
  }

  ngOnInit(): void {

    this.dataSource=this.versionService.getVersions();
    this.selectedReleases=[...this.versionService.selectedVersions];

  }

  versionClick(event:Event){
    let version:string =(event.target as HTMLElement).innerText;


    if (this.selectedReleases.includes(version)){
      this.selectedReleases=this.selectedReleases.filter(el => el!==version);
 

    }
    else
      if(version!="-")
        this.selectedReleases.push(version);
      this.selectedReleases.sort((a,b) => (a > b ? -1 : 1));
      

    


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
    this.versionService.updateIsVersionSelected(true);

  }

}
