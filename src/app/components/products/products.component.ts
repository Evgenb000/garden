import { Component, OnInit } from '@angular/core';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  standalone: true,
  imports: [CardComponent],
})
export class ProductsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
