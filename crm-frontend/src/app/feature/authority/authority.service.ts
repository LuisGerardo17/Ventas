import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Authority } from './authority';

@Injectable({
  providedIn: 'root'
})
export class AuthorityService {

  constructor(
    private http: HttpClient
  ) { }


  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url:string = "http://localhost:8090/api/authority";


  public findById(id: number):Observable<Authority>{
    return this.http.get<Authority>(this.url+"/findById/"+id, this.httpOptions);
  }


}
