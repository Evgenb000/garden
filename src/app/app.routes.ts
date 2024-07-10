import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/homePage/homePage.component';
import { CartPageComponent } from './pages/cartPage/cartPage.component';
import { ContactPageComponent } from './pages/contactPage/contactPage.component';
import { AboutPageComponent } from './pages/aboutPage/aboutPage.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'contact-us', component: ContactPageComponent },
  { path: 'about-us', component: AboutPageComponent },
];
