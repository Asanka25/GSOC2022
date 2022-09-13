import { Component, Input, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { FileService, File } from 'src/app/services/file.service';

@Component({
  selector: 'app-file-selector',
  templateUrl: './file-selector.component.html',
  styleUrls: ['./file-selector.component.css']
})
export class FileSelectorComponent implements OnInit {

  @Input() tabNumber:any;
  public files:any;

  constructor(private fileService:FileService) {}

  ngOnInit(): void {

    this.files=this.fileService.getFileSet(this.tabNumber)
 
  }

}


