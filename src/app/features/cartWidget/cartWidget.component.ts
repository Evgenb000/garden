import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cartWidget.component.html',
  standalone: true,
  imports: [NgClass, RouterLink, RouterLinkActive],
})
export class CartComponent implements OnInit {
  totalAmount: number = 0;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.totalAmount$.subscribe((amount) => {
      this.totalAmount = amount;
    });
  }
}
