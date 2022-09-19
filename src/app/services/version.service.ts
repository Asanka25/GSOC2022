import { Injectable, Version } from '@angular/core';
import { MatCardLgImage } from '@angular/material/card';
import { BehaviorSubject, Observable,Subject } from 'rxjs';
import {HttpClient} from '@angular/common/http';

export interface VersionPickerRow {
  year: number;
  march: string;
  june: string;
  september: string;
  december: string;
  // version:Version
}



@Injectable({
  providedIn: 'root'
})

export class VersionService {



  private subject =new BehaviorSubject<any>('');
  private _versionSource=new Subject<boolean>();
  isVersionSelected$=this._versionSource.asObservable();
  public versionsArray: any=[];
  public versionMap : Map<string, string[]> = new Map() ;


  public selectedVersions:string[]=[];


  constructor(private http:HttpClient) { }

  //fetch data related to all the versions
  initVersions(){
    var data=this.http.get<any>('http://localhost:8080/gsoc/new-versions');
    data.subscribe(data=>{
    
      data.forEach((e:any) => {
    
        var version =Object.keys(e)[0]
        var year =e[version].year
        var month =e[version].month
        var yearlyReleases=['-','-','-','-']
    
        if(this.versionMap.has(year)){
          yearlyReleases=this.versionMap.get(year)!
        }
        
      
        switch(month) { 
          case "March": { 
              yearlyReleases[0]=version 
              break; 
          } 
          case "June": { 
              yearlyReleases[1]=version 
              break; 
          } 
          case "September": { 
              yearlyReleases[2]=version 
              break; 
         } 
         case "December": { 
              yearlyReleases[3]=version 
              break; 
         }
 
       } 
       this.versionMap.set(year,yearlyReleases);  
        
      });
    
      this.versionMap.forEach((value, key) => {
        var obj={'year':key,'march':value[0],'june':value[1],'september':value[2],'december':value[3]}
        this.versionsArray.push(obj)
      })
    })
  
    
  }

// return versions array where it contains all the versions in this format
// {year: 2021, march: '76', june: '77', september: '78', december: '79'}
  getVersions(){
    console.log("gg",this.versionsArray);
    
    return this.versionsArray
  }



  emit(data:string[]){
    this.subject.next(data);

  }

  on():Observable<string[]>{
    return this.subject.asObservable();
  }

  updateIsVersionSelected(isSelected:boolean){
    this._versionSource.next(isSelected);
  }

}
