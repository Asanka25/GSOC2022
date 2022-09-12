import { Injectable } from '@angular/core';
import {  isEmpty, Observable,Subject } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { VersionService } from './version.service';


export interface File {
  id: number;
  name: string;
  link:string
}



@Injectable({
  providedIn: 'root'
})


export class FileService {

  public selections: { [version: string] : string[] } = {};
  // public versionFileMap: { [version: string] : string[] } = {};
  public versionFileMap: { [version:string]: File[]} ={};
  public commonFileArray=[];


  private _fileSource=new Subject<boolean>();
  sameFileForSelectedReleases=true;

  _sameFileForSelectedReleases$=this._fileSource.asObservable();

  constructor(private http:HttpClient,private versionService:VersionService) {}

  
  // public createVersionFileMap=(()=>{
    // console.log("inside promise");
    
    // this.versionService.selectedVersions.forEach(version => {
      // console.log("version list",version)
      // if(!this.versionFileMap.has(version))
      // {
        // await this.getFileData(version)
      // }
      // this.getFileData(version).subscribe(data=>{
        // this.versionFileMap.set(version,data);
        // console.log("map...",this.versionFileMap)
      // })


    // })
    // this.versionService.updateIsVersionSelected(true)
    // console.log("file map..............");

    
    // console.log("file map generated...",this.versionFileMap);
  // })

  public  createVersionFileMap=async()=>{
    
    
    this.versionService.selectedVersions.forEach(async version => {
      // console.log("version list",typeof(this.versionFileMap))
      if(!this.versionFileMap.hasOwnProperty(version))
      {
       ( this.getFileData(version)).subscribe(data=>{

         this.versionFileMap[version]=data})
       }

      })
    }
    //   this.getFileData(version).subscribe(data=>{
    //     console.log("map...",this.versionFileMap)
    //   })var data=


    // })
    // this.versionService.updateIsVersionSelected(true)
    // console.log("file map..............");

    
    // console.log("file map generated...",this.versionFileMap);
  


  createCommonFileSet(){
    // console.log("commn file inside",(this.versionFileMap));
    // console.log("commn file inside..........",(this.versionFileMap));

    // for(let key in this.versionFileMap){
      // console.log("appt",key);
      
    // }
    // for (let key in this.versionFileMap) {
    //   console.log(key, this.versionFileMap[key]);
    // }
    
    var arr:any = [];

    // for (const [key, value] of Object.entries(this.versionFileMap)) {
    //   console.log(key, value);
    // }
    // this.versionFileMap.forEach((value,key)=>{
    //   console.log("key values",value,key);
      
    //   arr.push(value)
    // })
    // console.log("arayyyy",arr);
    
  //   const commonArray = arr.reduce((p:any, c:any) =>{

  //   return p.filter((e:any) => c.map((a:any) => a.name).includes(e.name))
    
  // })
    // console.log("array common",commonArray);
    // this.commonFileArray= commonArray;
  }



   getFileSet(version:string){
    // for(let key in this.versionFileMap){
    //   console.log("appt",key);
      
    // }
    if(version==="xxx"){
      // console.log("commn array at xxx",this.commonFileArray);
      
      return this.commonFileArray;
    }
    else
      return this.versionFileMap[version];
  }


  setIsSelectAllReleases(value:boolean){
     this.sameFileForSelectedReleases=value;
     this._fileSource.next(value);
  }


  // async function getFileData(version:string) {
  //   let data= await this.http.get<File[]>("http://localhost:8080/gsoc/files/"+version)
  // } 
  
  // getFileData(version:string):Observable<File[]>{
  //   return this.FILE_DATA;
  //   return this.http.get('http://localhost:8080/gsoc/files/'+`'klkl'version`)
  //   var data= await this.http.get<File[]>("http://localhost:8080/gsoc/files/"+version)
  //   return data
  // }

   getFileData(version:string){
    // return this.FILE_DATA;
    // await this.http.get('http://localhost:8080/gsoc/files/'+`'klkl'version`)
    // var data=  this.http.get<File[]>("http://localhost:8080/gsoc/files/"+version)
    return this.http.get<File[]>("http://localhost:8080/gsoc/files/"+version)

    // console.log("dataaaa",data);
    // return data
    
  }

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
    console.log("select",version,name);
    
  }

}
