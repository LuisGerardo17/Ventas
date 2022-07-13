import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from './product';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService{

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type" : "application/json"})//INSTANCIA DE LA CLASE
  }

  private url:string = "http://localhost:8090/api/product";

  constructor(
    private http: HttpClient
  ) { }

  //CREATE
  public save(product:Product): Observable<Product>{
    return this.http.post<Product>(this.url+"/save",product, this.httpOptions);
  }

  //READ
  public findById(productoId:number): Observable<Product>{
    return this.http.get<Product>(this.url+"/"+ productoId, this.httpOptions);
  }
}
