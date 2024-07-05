import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideBarComponent } from './components/sideBar/sideBar.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './features/cartWidget/cartWidget.component';
import { HomePageComponent } from './pages/home/homePage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    ProductsComponent,
    HomePageComponent,
    CartComponent,
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'garden';
}
