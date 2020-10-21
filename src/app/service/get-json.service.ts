import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GetJsonService {

  constructor(private http: HttpClient) { }


  public getQuizJsonData (jsonName:string): Observable<any> {
    const fileUrl = "assets/data/quizJson/" + jsonName + ".json";
    return this.http.get(fileUrl);
  }

  public getSearchJsonData (jsonName:string): Observable<any> {
    const fileUrl = "assets/data/searchJson/" + jsonName + ".json";
    return this.http.get(fileUrl);
  }
}
