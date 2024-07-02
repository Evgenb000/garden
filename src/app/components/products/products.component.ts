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

  sortProducts(): void {
    if (!this.products || this.products.length === 0) return;

    switch (this.sortBy) {
      case 'price':
        this.products.sort((a, b) => a.price - b.price);
        break;
      case 'name':
        this.products.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'family':
        this.products.sort((a, b) => a.family.localeCompare(b.family));
        break;
      case 'order':
        this.products.sort((a, b) => a.order.localeCompare(b.order));
        break;
      case 'rating':
        this.products.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
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
        this.products.forEach((product) => {
          product.amount = 0;
        });
      });
  }

  decreaseAmount(product: Product): void {
    if (product.amount >= 0.5) {
      product.amount -= 0.5;
      this.totalAmount -= 0.5;
      this.updateTotalAmount(this.totalAmount);
    }
  }

  increaseAmount(product: Product): void {
    product.amount += 0.5;
    this.totalAmount += 0.5;
    this.updateTotalAmount(this.totalAmount);
  }

  buyProduct(product: Product): void {
    console.log(`Покупка: ${product.name}, количество: ${product.amount}`);
  }
}
