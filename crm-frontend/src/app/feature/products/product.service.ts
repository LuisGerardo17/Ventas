import { Injectable } from '@angular/core';
import {Product} from './product';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders}  from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    private httpOptions = {
    headers:new HttpHeaders({"Content-Type":"application/json"}) //instancia la clase

}
 private url:string = "http://localhost:8090/api/product";

   constructor(
   private http: HttpClient
) { }
//Create
public save(product:Product):Observable<Product>{
  return this.http.post<Product>(this.url+ "/save",product, this.httpOptions);
}

//Read
 public findById(productoId:number):Observable<Product>{
   return this.http.get<Product> (this.url+"/"+ productoId, this.httpOptions);
}

public findAll():Observable<Product[]>{
  return this.http.get<Product[]>(this.url+"/findAll", this.httpOptions);
}

public findByName(term: string):Observable<Product[]>{
  return this.http.get<Product[]>(this.url+"/findByName/"+term, this.httpOptions);
}

public deleteById(id: number): Observable<void>{
  console.log(id);
  return this.http.delete<void>(this.url+"/delete/"+id, this.httpOptions);
}

}
