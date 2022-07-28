import { Injectable } from '@angular/core';
import {Acesor} from './acesor';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders}  from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AcesorService {
    private httpOptions = {
    headers:new HttpHeaders({"Content-Type":"application/json"}) //instancia la clase

}
 private url:string = "http://localhost:8090/api/acesor";

   constructor(
  private http: HttpClient
) { }
//Create
public save(acesor:Acesor):Observable<Acesor>{
  return this.http.post<Acesor>(this.url+ "/save",acesor, this.httpOptions);
}

//Read
 public findById(acesorId:number):Observable<Acesor>{
   return this.http.get<Acesor> (this.url+"/"+ acesorId, this.httpOptions);
}

public findAll():Observable<Acesor[]>{
  return this.http.get<Acesor[]>(this.url+"/all", this.httpOptions);
}

public findByName(term: string):Observable<Acesor[]>{
  return this.http.get<Acesor[]>(this.url+"/findByName/"+term, this.httpOptions);
}

public deleteById(id: number): Observable<void>{
  console.log(id);
  return this.http.delete<void>(this.url+"/delete/"+id, this.httpOptions);
}

}
