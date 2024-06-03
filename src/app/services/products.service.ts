import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl =
    'https://run.mocky.io/v3/5efee2b8-2487-4267-878e-373add0cbe80';

  constructor(private http: HttpClient) {}

  getFruits(): Observable<any> {
    console.log(this.http.get<any>(this.apiUrl));
    return this.http.get<any>(this.apiUrl);
  }
}
