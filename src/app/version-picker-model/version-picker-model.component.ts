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


  constructor(private versionService:VersionService) { 
  }

  ngOnInit(): void {
    this.dataSource=this.versionService.getVersions();

  }

}
