import { Injectable } from '@angular/core';


export interface VersionPickerColumn {
  year: number;
  march: string;
  june: string;
  september: string;
  december: string;
}


@Injectable({
  providedIn: 'root'
})
export class VersionService {

  constructor() { }

  getVersions(){
     
    const ELEMENT_DATA: VersionPickerColumn[] = [
      {year: 2022, march: '84', june:"85", september: '86',december:`<h1>45</h1>`},
      {year: 2021, march: '80', june:"81", september: '82',december:"83"},
      {year: 2020, march: '76', june:"77", september: '78',december:"79"},
      {year: 2019, march: '72', june:"73", september: '74',december:"75"},
      {year: 2018, march: '68', june: "69", september: '70',december:"71"},
      {year: 2017, march: '64', june: "65", september: '66',december:"67"},
      {year: 2016, march: '56', june: "61", september: '62',december:"63"},
      {year: 2015, march: '52', june: "53", september: '54',december:"55"},
      {year: 2014, march: '48', june: "49", september: '50',december:"51"},
      {year: 2013, march: '44', june: "45", september: '46',december:"47"},
      {year: 2012, march: '40', june: "41", september: '42',december:"43"},
      {year: 2012, march: '40', june: "41", september: '42',december:"43"},
    
    ];

    return ELEMENT_DATA;
  }


}
