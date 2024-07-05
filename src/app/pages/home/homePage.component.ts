import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProductsComponent } from '../../components/products/products.component';
import { SideBarComponent } from '../../components/sideBar/sideBar.component';
import { CartComponent } from '../../features/cartWidget/cartWidget.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-homePage',
  templateUrl: './homePage.component.html',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    ProductsComponent,
    CartComponent,
    RouterOutlet,
    RouterLink,
  ],
})
export class HomePageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
