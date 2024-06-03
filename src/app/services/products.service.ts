import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl =
    'https://run.mocky.io/v3/2ab2aaa5-1a62-49a6-b27f-c0dffc911090';

  constructor(private http: HttpClient) {}

  getFruits(): Observable<any> {
    console.log(this.http.get<any>(this.apiUrl));
    return this.http.get<any>(this.apiUrl);
  }
}
