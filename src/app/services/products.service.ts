import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl =
    'https://run.mocky.io/v3/d34e599f-b152-4c42-bb55-2b56514edbe0';

  constructor(private http: HttpClient) {}

  getFruits(): Observable<any> {
    console.log(this.http.get<any>(this.apiUrl));
    return this.http.get<any>(this.apiUrl);
  }
}
