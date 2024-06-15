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

interface Fruit {
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
  fruits: Fruit[] = [];
  public totallAmount: number = 0;

  constructor(
    private totalAmountService: TotalAmountService,
    private productsService: ProductsService
  ) {}

  updateTotalAmount(amount: number): void {
    this.totalAmountService.setTotalAmount(amount);
  }

  ngOnInit(): void {
    this.productsService.getFruits().subscribe((fruits: Fruit[]) => {
      this.fruits = fruits;
      this.fruits.forEach((fruit) => {
        fruit.amount = 0;
      });
    });
  }

  decreaseAmount(fruit: Fruit): void {
    if (fruit.amount >= 0.5) {
      fruit.amount -= 0.5;
      this.totallAmount -= 0.5;
      this.updateTotalAmount(this.totallAmount);
    }
  }

  increaseAmount(fruit: Fruit): void {
    fruit.amount += 0.5;
    this.totallAmount += 0.5;
    this.updateTotalAmount(this.totallAmount);
  }

  buyFruit(fruit: Fruit): void {
    console.log(`Покупка: ${fruit.name}, количество: ${fruit.amount}`);
  }
}
