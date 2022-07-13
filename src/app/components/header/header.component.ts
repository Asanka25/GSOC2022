import { Component, OnInit } from '@angular/core';
import { VersionService } from 'src/app/services/version.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public finalSelectedVersions:string[]=[];

  constructor() { }



  ngOnInit(): void {

  
    }


  

}
