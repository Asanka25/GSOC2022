import { Component, OnInit } from '@angular/core';
import { VersionPickerColumn, VersionService } from '../version.service';





@Component({
  selector: 'app-version-picker-model',
  templateUrl: './version-picker-model.component.html',
  styleUrls: ['./version-picker-model.component.css']
})
export class VersionPickerModelComponent implements OnInit {


  displayedColumns: string[] = ['year', 'march', 'june', 'september','december'];
  public dataSource: VersionPickerColumn[]=[];
  public selectedVersions:string[]=[];


  constructor(private versionService:VersionService) { 
  }

  ngOnInit(): void {
    this.dataSource=this.versionService.getVersions();

  }

  versionClick(event:Event){
    let version:string =(event.target as HTMLElement).innerText;
    console.log(version);

    if (this.selectedVersions.includes(version)){
      this.selectedVersions=this.selectedVersions.filter(el => el!==version);
    }
    else
      this.selectedVersions.push(version);

  }

  isVersionSelected(version:string){
    if (this.selectedVersions.includes(version)){
      return true;

    }
    return false;

  }


}
