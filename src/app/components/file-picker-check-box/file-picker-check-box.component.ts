import { Component, OnInit } from '@angular/core';
import { MatCardLgImage } from '@angular/material/card';

@Component({
  selector: 'app-file-picker-check-box',
  templateUrl: './file-picker-check-box.component.html',
  styleUrls: ['./file-picker-check-box.component.css']
})
export class FilePickerCheckBoxComponent implements OnInit {



  public checkBoxEnabled="false";

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    console.log("clicked");
    this.checkBoxEnabled="true";
  }

}
