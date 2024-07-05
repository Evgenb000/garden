import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/homePage.component';
import { CartPageComponent } from './pages/cart/cartPage.component';
import { ContactUsComponent } from './pages/contactUs/contactUs.component';
import { AboutUsComponent } from './pages/aboutUs/aboutUs.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about-us', component: AboutUsComponent },
];
