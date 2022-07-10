import { Component, Input, OnInit } from '@angular/core';
import { FileService, File } from 'src/app/services/file.service';

@Component({
  selector: 'app-file-selector',
  templateUrl: './file-selector.component.html',
  styleUrls: ['./file-selector.component.css']
})
export class FileSelectorComponent implements OnInit {

  @Input() tabNumber:string="";
  public files:File[];

  constructor(private fileService:FileService) {
    this.files=fileService.getFileData();
  }

  ngOnInit(): void {
  }

  title: string = 'gsoc file selector';

}


