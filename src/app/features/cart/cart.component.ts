import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TotalAmountService } from '../../services/totalAmount.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  standalone: true,
  imports: [NgClass],
})
export class CartComponent implements OnInit {
  totalAmount: number = 0;

  constructor(private totalAmountService: TotalAmountService) {}

  ngOnInit(): void {
    this.totalAmountService.totalAmount$.subscribe((amount) => {
      this.totalAmount = amount;
    });
  }
}
