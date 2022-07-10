import { Injectable } from '@angular/core';

export interface File {
  id: number;
  name: string;
}



@Injectable({
  providedIn: 'root'
})


export class FileService {

  private _selections: { [version: string] : string[] } = {};
  private _isAllVersionsSelected=false;

  constructor() { }

  public FILE_DATA: File[] = [

    {id: 1, name: 'File1'},
    {id: 2, name: 'File2'},
    {id: 3, name: 'File3'},
    {id: 4, name: 'File4'},
    {id: 5, name: 'File5'},
    {id: 6, name: 'File6'},
    {id: 7, name: 'File7'},
    {id: 8, name: 'File8'},
    {id: 9, name: 'File9'},
    {id: 10, name: 'File10'},
    {id: 11, name: 'File11'},
    {id: 12, name: 'File12'},


  ];

  getFileData():File[]{
    return this.FILE_DATA;
  }

  selectFile(version:string,name:string){
    if (this._selections.hasOwnProperty(version)) {
      let fileList=this._selections[version]
      if(!fileList.includes(name))
        fileList.push(name)
      else
      // Remove item
        fileList = fileList.filter(obj =>  obj !== name);

      this._selections[version]=fileList
    }else{
      this._selections[version]=[name];

    }
    console.log("dict",this._selections)
  }

}
