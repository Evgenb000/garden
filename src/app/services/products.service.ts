import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { SearchService } from './search.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl =
    'https://run.mocky.io/v3/498495b7-17bb-4fd4-98a0-8fda077c145c';

  constructor(private http: HttpClient, private searchService: SearchService) {}

  getProducts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getFilteredProducts(): Observable<any> {
    return combineLatest([this.getProducts(), this.searchService.search$]).pipe(
      map(([products, searchTerm]) => {
        return products.filter((product: any) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      })
    );
  }
}
