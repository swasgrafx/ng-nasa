import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Apod } from './apod';

@Injectable({
  providedIn: 'root'
})
export class ApodService {

  private domain:string ='https://api.nasa.gov/planetary/';
  private args:string ='apod?api_key=';
  private nasaKey:string ='390M91Et3zMGVAsL2q7BYziWdK5Q3lfIMhFoSRl2';
  private url:string;

  constructor(private http:HttpClient){}

  private setUrl(date=''){
    if(date){
      date=`&date=${date}`;
    }

    this.url = `${this.domain}${this.args}${this.nasaKey}${date}`;
  }
  public getApod(date=""): Observable<any>{
    this.setUrl(date);
    return this.http.get<Apod>(this.url);
  }
}
