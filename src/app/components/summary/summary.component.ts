import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/services/file.service';
import { VersionService } from 'src/app/services/version.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  public selections: { [version: string] : string[] }={};
  public _sameFileForSelectedReleases: boolean=true;
  // public selectedVersions:string[]=[];
  public finalSelectedVersions;
  public noFilesSelectedFlag=true;


  constructor(private _fileService:FileService,private _versionService: VersionService) {
    this.finalSelectedVersions=this._versionService.selectedVersions;
    this._sameFileForSelectedReleases=_fileService.sameFileForSelectedReleases;
   }

  ngOnInit(): void {
   

    this.selections=this._fileService.selections;
    for(let key in this.selections){
      if (key=="xxx" && this.selections[key].length==0) {
        this.finalSelectedVersions=[];
      }
      else if(this.selections[key].length==0){
        this.finalSelectedVersions = this.finalSelectedVersions.filter(obj =>  obj !== key);
       
      }else{
          this.noFilesSelectedFlag=false;
      }
      
    }
    this.finalSelectedVersions=this.finalSelectedVersions.sort((a,b) => (a > b ? -1 : 1)); //sort keys in selections dictionary desc order
    
    this._fileService._sameFileForSelectedReleases$.subscribe(value=>{
      this._sameFileForSelectedReleases=value;
    })
    

  }


  download(){
    //send request to cloudFront
    if(!this.noFilesSelectedFlag){      
      var linksArr:any[]=[];
      if(!this._fileService.sameFileForSelectedReleases ){
        
        for(let version in this.selections){
          let FileNames=this.selections[version];
          FileNames.forEach(file_name=>{
            console.log(file_name);
            let fileObj=this._fileService.versionFileMap[version].filter((file)=>file.name==file_name)[0]
            linksArr.push(fileObj.link)
         
          })
          
        }

      }else{
          let FileNames=this.selections['xxx']
  
          for(let key in this.finalSelectedVersions){
            
            FileNames.forEach((file_name)=>{
                
                let version =this.finalSelectedVersions[key]
                console.log(this._fileService.versionFileMap[version]);
                let fileObj =this._fileService.versionFileMap[version].filter((file)=>file.name==file_name)[0]
                linksArr.push(fileObj.link)
              })
            }
            console.log(linksArr);
           

      }
      //Downloading files logic
      linksArr.forEach((link:string)=>{
        console.log("link",link);  //download each link
        
      })
    }
  }

  editSelections(){
    console.log("edit selections")
  }



}
