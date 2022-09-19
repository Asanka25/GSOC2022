import { Component, Input, OnInit } from '@angular/core';
import { MatCardLgImage } from '@angular/material/card';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-file-picker-check-box',
  templateUrl: './file-picker-check-box.component.html',
  styleUrls: ['./file-picker-check-box.component.css']
})
export class FilePickerCheckBoxComponent implements OnInit {


  @Input() label:string="";
  @Input() fileSize:string="";
  @Input() tabNumber:string="";

  public checkBoxEnabled="false";

  constructor(private fileService:FileService) { }

  ngOnInit(): void {
  }

  onClick(){

    this.fileService.selectFile(this.tabNumber,this.label)
    
  }

  

}
