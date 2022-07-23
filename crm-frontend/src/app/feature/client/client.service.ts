import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(
    private http: HttpClient
  ) { }


  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url:string = "http://localhost:8090/api/clientes";


  public findById(id: number):Observable<Client>{
    return this.http.get<Client>(this.url+"/findById/"+id, this.httpOptions);
  }


  public findByName(term: string): Observable<Client[]> {
    return this.http.get<Client[]>(this.url + "/findByName/" + term, this.httpOptions);
  }

  //Create
  public save(client: Client): Observable<Client> {
    return this.http.post<Client>(this.url + "/save", client, this.httpOptions);
  }

  public findAll(): Observable<Client[]> {
    return this.http.get<Client[]>(this.url + "/findAll", this.httpOptions);
  }
}
