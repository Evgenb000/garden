import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { SortByService } from '../../services/sortBy.service';
import { TotalAmountService } from '../../services/totalAmount.service';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  standalone: true,
  imports: [NgFor, NgIf],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  sortBy: string = '';

  constructor(
    private productsService: ProductsService,
    private totalAmountService: TotalAmountService
  ) {}

  ngOnInit(): void {
    this.productsService
      .initializeProducts()
      .subscribe((products: Product[]) => {
        this.products = products;
      });
  }

  decreaseAmount(product: Product): void {
    product.currentlyAmount -= 0.5;
    this.productsService.decreaseAmount(product);
  }

  increaseAmount(product: Product): void {
    product.currentlyAmount += 0.5;
  }

  addToCart(product: Product, id: number): void {
    this.productsService.increaseAmount(product);
    this.productsService.updateTotalAmount(product.currentlyAmount);
    product.currentlyAmount = 0;
  }
}
