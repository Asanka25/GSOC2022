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

  constructor(private fileService:FileService) {
   
    // this.fileService.getFileData().subscribe(data=>{
    //   this.files=data;
    //   console.log("this.files inside ..............")
    // })
  }

  ngOnInit(): void {
    console.log("received",this.tabNumber);
    this.files=this.fileService.getFileSet(this.tabNumber)
    console.log("file selector",this.files);
    
    

  }

}


