import { Injectable } from '@angular/core';
import {  isEmpty, Observable,Subject } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { VersionService } from './version.service';
import axios from 'axios';


export interface File {
  id: number;
  name: string;
  fileSize:string
  link:string
}



@Injectable({
  providedIn: 'root'
})


export class FileService {

  public selections: { [version: string] : string[] } = {};
  public versionFileMap: { [version:string]: File[]} ={};
  public commonFileArray=[];


  private _fileSource=new Subject<boolean>();
  sameFileForSelectedReleases=true;

  _sameFileForSelectedReleases$=this._fileSource.asObservable();

  constructor(private http:HttpClient,private versionService:VersionService) {}


  public  createVersionFileMap=async()=>{
    
    for (const version of this.versionService.selectedVersions)  {
      if(!this.versionFileMap.hasOwnProperty(version))
      {
        const data= await this.getFileData(version)
        this.versionFileMap[version]=data
      }
    }
  
  }
    

// Once the versions are selected and files fetched, this function will be invoked and it will create
// common file set among the selected versions
  createCommonFileSet(){
 
    var arr:any = [];
    for (let version in this.versionFileMap) {
      var file_list=this.versionFileMap[version]
      arr.push(file_list)
    }
    
    const commonArray = arr.reduce((p:any, c:any) =>{
    return p.filter((e:any) => c.map((a:any) => a.name).includes(e.name))
  })
    
    this.commonFileArray= commonArray;
    
  }


//This function will return the files to be shown in the tab component in respective tabs
   getFileSet(version:string){

    if(version==="xxx"){
      return this.commonFileArray;
    }
    else{
      return this.versionFileMap[version];
    }
  }


  setIsSelectAllReleases(value:boolean){
     this.sameFileForSelectedReleases=value;
     this._fileSource.next(value);
  }


 
// Fetch files for a given version
   async getFileData(version:string):Promise<File[]>{
   
    const response =await axios.get('http://localhost:8080/gsoc/files/'+version)
    return response.data

    
  }

  //This will track all selected files among the verions
  selectFile(version:string,name:string){

    if (this.selections.hasOwnProperty(version)) {
      let fileList=this.selections[version]


      if(!fileList.includes(name))
        fileList.push(name)
      else
      // Remove item
        fileList = fileList.filter(obj =>  obj !== name);

      this.selections[version]=fileList
    }else{
      this.selections[version]=[name];

    }
    console.log(this.selections);
    
  }

}
