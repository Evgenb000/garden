import { Component, OnInit } from '@angular/core';
import { SearchBarComponent } from './searchBar/searchBar.component';
import { SortByService } from '../../services/sortBy.service';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-sideBar',
  templateUrl: './sideBar.component.html',
  standalone: true,
  imports: [SearchBarComponent, NgFor, NgIf, NgClass],
})
export class SideBarComponent implements OnInit {
  sortBy: string = '';
  sortOptions = [
    { label: 'Price', value: 'price' },
    { label: 'Name', value: 'name' },
    { label: 'Rating', value: 'rating' },
    { label: 'Family', value: 'family' },
    { label: 'Nutritions', value: 'nutritions' },
  ];
  nutritionOptions = [
    { label: 'Calories', value: 'calories' },
    { label: 'Fat', value: 'fat' },
    { label: 'Sugar', value: 'sugar' },
    { label: 'Carbohydrates', value: 'carbohydrates' },
    { label: 'Protein', value: 'protein' },
  ];

  constructor(private sortByService: SortByService) {}

  onSortChange(value: string): void {
    if (this.sortBy === value) {
      this.sortBy = '-' + value;
      this.sortByService.setSortBy(this.sortBy);
    } else {
      this.sortBy = value;
      this.sortByService.setSortBy(this.sortBy);
    }
  }

  clearSort() {
    this.sortBy = '';
    console.log(this.sortBy);
    this.sortByService.setSortBy(this.sortBy);
  }

  ngOnInit(): void {}
}
