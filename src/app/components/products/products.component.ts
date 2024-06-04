import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { NgFor } from '@angular/common';
// import imggg from ;

interface Nutrition {
  calories: number;
  fat: number;
  sugar: number;
  carbohydrates: number;
  protein: number;
}

const imggg = 0;

interface Fruit {
  name: string;
  family: string;
  order: string;
  genus: string;
  imgUrl: string; // URL изображения фрукта
  price: number; // Цена фрукта
  amount: number; // Количество для покупки
  rating: number; // Рейтинг фрукта
  nutritions: Nutrition;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  standalone: true,
  imports: [NgFor],
})
export class ProductsComponent implements OnInit {
  fruits: Fruit[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getFruits().subscribe((data) => {
      this.fruits = data;
    });
  }

  decreaseAmount(fruit: Fruit): void {
    if (fruit.amount > 1) {
      fruit.amount--;
    }
  }

  increaseAmount(fruit: Fruit): void {
    fruit.amount++;
  }

  buyFruit(fruit: Fruit): void {
    console.log(`Покупка: ${fruit.name}, количество: ${fruit.amount}`);
    // Добавьте здесь логику покупки
  }
}
