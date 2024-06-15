import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideBarComponent } from './components/sideBar/sideBar.component';
import { ProductsComponent } from './components/products/products.component';
import { HttpClient } from '@angular/common/http';
import { CartComponent } from './features/cart/cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    ProductsComponent,
    CartComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'garden';
}
