import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TotalAmountService } from '../../services/totalAmount.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cartWidget.component.html',
  standalone: true,
  imports: [NgClass, RouterLink, RouterLinkActive],
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
