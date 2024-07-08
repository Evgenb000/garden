import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product.model';
import { ProductsService } from '../../services/products.service';
import { TotalAmountService } from '../../services/totalAmount.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-CartPage',
  templateUrl: './cartPage.component.html',
  standalone: true,
  imports: [NgFor, NgIf],
})
export class CartPageComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService
      .getCurrentProducts()
      .subscribe((products: Product[]) => {
        this.products = products;
        console.log(products);
      });
  }
}
