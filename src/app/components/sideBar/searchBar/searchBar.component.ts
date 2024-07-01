import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../services/search.service';

@Component({
  selector: 'app-searchBar',
  templateUrl: './searchBar.component.html',
  standalone: true,
})
export class SearchBarComponent implements OnInit {
  searchPlaceholder: string = 'Search...';

  constructor(private searchService: SearchService) {}

  ngOnInit() {}

  placeholderHandler(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value;
    this.searchPlaceholder = value;
    this.searchService.setSearchTerm(inputElement.value);
    console.log(this.searchPlaceholder);
  }
}
