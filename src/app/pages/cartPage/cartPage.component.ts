import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product.model';
import { ProductsService } from '../../services/products.service';
import { TotalAmountService } from '../../services/totalAmount.service';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-CartPage',
  templateUrl: './cartPage.component.html',
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
})
export class CartPageComponent implements OnInit {
  products: Product[] = [];
  productsCount = 0;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService
      .getCurrentProducts()
      .subscribe((products: Product[]) => {
        this.products = products;
        this.productsCount = this.products.filter(
          (product) => product.amount > 0
        ).length;
      });
  }

  onRemove = (product: { amount: number }) => {
    product.amount = 0;
  };
}
