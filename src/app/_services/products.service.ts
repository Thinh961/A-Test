import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../_models/products.model';

const httpOptions ={
  headers:new HttpHeaders({'Content-Type':'Application/json'})
}

const apiUrl = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private httpClient:HttpClient,
  ) { }

  getAll():Observable<Products[]>{
    return this.httpClient.get<Products[]>(apiUrl).pipe(
    )
  }
}
