import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { NgFor } from '@angular/common';
import { TotalAmountService } from '../../services/totalAmount.service';
import { SortByService } from '../../services/sortBy.service';

interface Nutrition {
  calories: number;
  fat: number;
  sugar: number;
  carbohydrates: number;
  protein: number;
}

interface Product {
  id: number;
  name: string;
  family: string;
  order: string;
  genus: string;
  imgUrl: string;
  price: number;
  rating: number;
  nutritions: Nutrition;
  amount: number;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  standalone: true,
  imports: [NgFor],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  sortBy: string = '';
  public totalAmount: number = 0;

  constructor(
    private totalAmountService: TotalAmountService,
    private productsService: ProductsService,
    private sortByService: SortByService
  ) {}

  updateTotalAmount(amount: number): void {
    this.totalAmountService.setTotalAmount(amount);
  }

  sortProducts(): boolean {
    if (!this.products || this.products.length === 0) return false;

    const sortOrder: number = this.sortBy.startsWith('-') ? -1 : 1;
    const sortByField: keyof Product | keyof Nutrition = this.sortBy.replace(
      /^-/,
      ''
    ) as keyof Product | keyof Nutrition;

    this.products.sort((a: Product, b: Product): number => {
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

    return true;
  }

  ngOnInit(): void {
    this.sortByService.getSortBy().subscribe((sortBy: string) => {
      this.sortBy = sortBy;
      this.sortProducts();
    });

    this.productsService
      .getFilteredProducts()
      .subscribe((filteredProducts: Product[]) => {
        this.products = filteredProducts;
        this.sortProducts();
        this.products.forEach((product) => {
          product.amount = 0;
        });
      });
  }

  decreaseAmount(product: Product): void {
    if (product.amount >= 0.5) {
      product.amount -= 0.5;
      this.totalAmount -= 0.5;
    }
  }

  increaseAmount(product: Product): void {
    product.amount += 0.5;
    this.totalAmount += 0.5;
  }

  addToCart(): void {
    this.updateTotalAmount(this.totalAmount);
  }
}
