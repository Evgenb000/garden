import { Component, OnInit } from '@angular/core';
import { CardComponent } from './card/card.component';
import { ProductsService } from '../../services/products.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  standalone: true,
  imports: [CardComponent, NgFor],
})
export class ProductsComponent implements OnInit {
  fruits: any[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getFruits().subscribe((data) => {
      this.fruits = data;
    });
  }
}
