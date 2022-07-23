import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from './person';
@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(
    private http: HttpClient

  ) { }


  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url:string = "http://localhost:8090/api/persons";


  public findAll():Observable<Person[]>{
    return this.http.get<Person[]>(this.url+"/findAll", this.httpOptions);
  }
}
