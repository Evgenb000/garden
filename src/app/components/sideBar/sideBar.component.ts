import { Component, OnInit } from '@angular/core';
import { SearchBarComponent } from './searchBar/searchBar.component';
import { SortByService } from '../../services/sortBy.service';

@Component({
  selector: 'app-sideBar',
  templateUrl: './sideBar.component.html',
  standalone: true,
  imports: [SearchBarComponent],
})
export class SideBarComponent implements OnInit {
  sortBy: string = '';

  constructor(private sortByService: SortByService) {}

  onSortChange(value: string): void {
    if (this.sortBy === value) {
      this.sortBy = '-' + value;
      this.sortByService.setSortBy(this.sortBy);
    } else {
      this.sortBy = value;
      this.sortByService.setSortBy(this.sortBy);
    }

    console.log(this.sortBy + '123');
    console.log(value + '0000123');
  }

  ngOnInit(): void {}
}
