import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url:string = "http://localhost:8090/api/product";


  public findById(id: number):Observable<Products>{
    return this.http.get<Products>(this.url+"/findById/"+id, this.httpOptions);
  }

  public findByName(term: string): Observable<Products[]>{
    return this.http.get<Products[]>(this.url+"/findByName/"+term, this.httpOptions);
  }

  //Create
  public save(product: Products): Observable<Products> {
    return this.http.post<Products>(this.url + "/save", product, this.httpOptions);
  }

  public findAll(): Observable<Products[]> {
    return this.http.get<Products[]>(this.url + "/findAll", this.httpOptions);
  }
}
