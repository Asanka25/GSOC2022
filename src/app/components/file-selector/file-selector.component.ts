import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-selector',
  templateUrl: './file-selector.component.html',
  styleUrls: ['./file-selector.component.css']
})
export class FileSelectorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title: string = 'gsoc file selector';

}


