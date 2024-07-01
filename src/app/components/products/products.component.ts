import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { NgFor } from '@angular/common';
import { TotalAmountService } from '../../services/totalAmount.service';

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
  public totallAmount: number = 0;

  constructor(
    private totalAmountService: TotalAmountService,
    private productsService: ProductsService
  ) {}

  updateTotalAmount(amount: number): void {
    this.totalAmountService.setTotalAmount(amount);
  }

  ngOnInit(): void {
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
      this.totallAmount -= 0.5;
      this.updateTotalAmount(this.totallAmount);
    }
  }

  increaseAmount(product: Product): void {
    product.amount += 0.5;
    this.totallAmount += 0.5;
    this.updateTotalAmount(this.totallAmount);
  }

  buyProduct(product: Product): void {
    console.log(`Покупка: ${product.name}, количество: ${product.amount}`);
  }
}
