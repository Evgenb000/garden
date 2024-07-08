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
  currAmount: number = 0;
  public totalAmount: number = 0;

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
    this.totalAmount = this.productsService.getTotalAmount();
  }

  increaseAmount(product: Product): void {
    product.currentlyAmount += 0.5;
    this.productsService.increaseAmount(product);
    this.totalAmount = this.productsService.getTotalAmount();
  }

  addToCart(product: Product): void {
    product.currentlyAmount = 0;
    this.totalAmountService.setTotalAmount(this.totalAmount);
  }
}
