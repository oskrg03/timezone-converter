import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiTimezoneService {
  url ="https://back-service.herokuapp.com" 
  httpOptions = {
    headers: new HttpHeaders({
      "content-Type": "application/json",
    }),
  };


  constructor(private Http: HttpClient) { 

  }

   getResponse(time, timezone):Observable<any>{
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    
    return this.Http.post<any>(this.url+"/getHora?time="+time+"&timezone="+timezone, {
      headers: headers,
    });
  }

}
