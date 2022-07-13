import { Injectable } from '@angular/core';
import {Client} from './client';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders}  from '@angular/common/http';

 @Injectable({
  providedIn: 'root'
})
export class ClientService {
   private httpOptions = {
    headers:new HttpHeaders({"Content.Type":"aplication/json"}) //instancia la clase
}

 private url:string = "http://localhost:8090/api/client";

  constructor(
    private http: HttpClient //instancia la clase y es semjante al repository post, get, delete
  ) { }

  //Create
        public save(client:Client):Observable<Client>{
         return this.http.post<Client>(this.url+"/save",client, this.httpOptions)
    }

    //Read
        public findById(clientId:number):Observable<Client>{
          return this.http.get<Client> (this.url+"/"+clientId, this.httpOptions);
    }
}
