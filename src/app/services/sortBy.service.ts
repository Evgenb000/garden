import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SortByService {
  private sortBy: BehaviorSubject<string> = new BehaviorSubject<string>(
    'rating'
  );

  constructor() {}

  setSortBy(sortBy: string): void {
    if (sortBy === '') {
      this.sortBy.next('rating');
    } else {
      this.sortBy.next(sortBy);
    }
  }

  getSortBy() {
    return this.sortBy.asObservable();
  }
}
