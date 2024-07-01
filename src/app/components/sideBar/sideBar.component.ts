import { Component, OnInit } from '@angular/core';
import { SearchBarComponent } from './searchBar/searchBar.component';

@Component({
  selector: 'app-sideBar',
  templateUrl: './sideBar.component.html',
  standalone: true,
  imports: [SearchBarComponent],
})
export class SideBarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
