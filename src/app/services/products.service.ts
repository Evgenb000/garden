import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { SearchService } from './search.service';
import { Product, Nutrition } from '../model/product.model';
import { SortByService } from './sortBy.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl =
    'https://run.mocky.io/v3/498495b7-17bb-4fd4-98a0-8fda077c145c';
  public totalAmount: number = 0;
  private products: Product[] = [];
  private sortBy: string = '';
  private productsSubject: BehaviorSubject<Product[] | null> =
    new BehaviorSubject<Product[] | null>(null);
  private totalAmountSubject = new BehaviorSubject<number>(0);
  totalAmount$ = this.totalAmountSubject.asObservable();

  constructor(
    private http: HttpClient,
    private searchService: SearchService,
    private sortByService: SortByService
  ) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getFilteredProducts(): Observable<Product[]> {
    return combineLatest([this.getProducts(), this.searchService.search$]).pipe(
      map(([products, searchTerm]) => {
        return products.filter((product: Product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      })
    );
  }

  sortProducts(products: Product[], sortBy: string): Product[] {
    const sortOrder: number = sortBy.startsWith('-') ? -1 : 1;
    const sortByField: keyof Product | keyof Nutrition = sortBy.replace(
      /^-/,
      ''
    ) as keyof Product | keyof Nutrition;

    return products.sort((a: Product, b: Product): number => {
      let comparison: number = 0;

      if (
        sortByField === 'calories' ||
        sortByField === 'fat' ||
        sortByField === 'sugar' ||
        sortByField === 'carbohydrates' ||
        sortByField === 'protein'
      ) {
        comparison =
          (a.nutritions[sortByField] - b.nutritions[sortByField]) * sortOrder;
      }

      switch (sortByField) {
        case 'price':
          comparison = (a.price - b.price) * sortOrder;
          break;
        case 'name':
          comparison = a.name.localeCompare(b.name) * sortOrder;
          break;
        case 'family':
          comparison = a.family.localeCompare(b.family) * sortOrder;
          break;
        case 'order':
          comparison = a.order.localeCompare(b.order) * sortOrder;
          break;
        case 'rating':
          comparison = (b.rating - a.rating) * sortOrder;
          break;
        default:
          break;
      }

      return comparison;
    });
  }

  updateTotalAmount(amount: number): void {
    const updatedTotal = this.totalAmountSubject.value + amount;
    this.totalAmountSubject.next(updatedTotal);
  }

  getTotalAmount(): number {
    return this.totalAmount;
  }

  increaseAmount(product: Product): void {
    product.amount += 0.5;
    this.totalAmount += 0.5;
  }

  decreaseAmount(product: Product): void {
    if (product.amount >= 0.5) {
      product.amount -= 0.5;
      this.totalAmount -= 0.5;
    }
  }

  initializeProducts(): Observable<Product[]> {
    return combineLatest([
      this.getFilteredProducts(),
      this.sortByService.getSortBy(),
    ]).pipe(
      map(([filteredProducts, sortBy]) => {
        this.sortBy = sortBy;
        this.products = this.sortProducts(filteredProducts, this.sortBy);
        this.products.forEach((product) => {
          product.amount = 0;
          product.currentlyAmount = 0;
        });
        return this.products;
      }),
      tap((products) => {
        this.products = products;
        this.productsSubject.next(this.products);
      })
    );
  }

  getCurrentProducts(): Observable<Product[]> {
    return this.productsSubject.asObservable().pipe(
      filter((products) => products !== null),
      map((products) => products as Product[])
    );
  }
}
