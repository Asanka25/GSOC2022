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
  // public versionMap : { [year: string] : string[] } = {};
  public versionMap : Map<string, string[]> = new Map() ;


  public selectedVersions:string[]=[];


  constructor(private http:HttpClient) { 


  }

  initVersions(){
    var data=this.http.get<any>('http://localhost:8080/gsoc/new-versions');
    data.subscribe(data=>{
    
      // console.log("data....",(data));
      
      data.forEach((e:any) => {
        // console.log(e);
        
        var version =Object.keys(e)[0]
        var year =e[version].year
        var month =e[version].month
        var yearlyReleases=['-','-','-','-']
        // console.log(year,month);
        
        // console.log(this.versionMap);
        // console.log(this.versionMap.get('2012'));
        // console.log(this.versionMap.has('2012'));

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
    //   console.log(this.versionMap);
      this.versionMap.forEach((value, key) => {
        // console.log(value, key)
        var obj={'year':key,'march':value[0],'june':value[1],'september':value[2],'december':value[3]}
        this.versionsArray.push(obj)
    })
     
      
      // console.log(this.versionsArray);
      
    })
  
      // console.log(":",data);
  }


  getVersions(){
    // console.log((this.ELEMENT_DATA));
    // const arr=this.ELEMENT_DATA.map(obj => {
    //   // var localObj:any = [];
    //   // localObj[obj] = obj.year;

    //   var object={"year":obj.year}
    //   return object;
    //  });
    //  var dataArray = JSON.parse()
    //  console.log(dataArray);
    // const ELEMENT_DATA: VersionPickerRow[] =


    // [
    //   {"year": 2022, "march": "80", "june":"81", "september":  "-" ,"december":"-"},
    //   {"year": 2021, "march": "76", "june":"77", "september":  "78","december":"79"},
    //   {"year": 2020, "march": "72", "june":"73", "september":  "74","december":"75"},
    //   {"year": 2019, "march": "68", "june": "69", "september": "70","december":"71"},
    //   {"year": 2018, "march": "64", "june": "65", "september": "66","december":"67"},
    //   {"year": 2017, "march": "56", "june": "61", "september": "62","december":"63"},
    //   {"year": 2016, "march": "52", "june": "53", "september": "54","december":"55"},
    //   {"year": 2015, "march": "48", "june": "49", "september": "50","december":"51"},
    //   {"year": 2014, "march": "44", "june": "45", "september": "46","december":"47"},
    //   {"year": 2013, "march": "40", "june": "41", "september": "42","december":"43"}
      
    // ]

    // return ELEMENT_DATA;
  // var data=this.http.get('http://localhost:8080/gsoc/old-versions');
  // data.subscribe(data=>{
    
    // console.log("ddddddddddddd",data);
    
  // })

    // console.log(":",data);
    
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
