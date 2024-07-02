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
  sortBy: string = 'rating';

  constructor(private sortByService: SortByService) {}

  onSortChange(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.sortByService.setSortBy(selectedValue);
  }
  ngOnInit(): void {}
}
