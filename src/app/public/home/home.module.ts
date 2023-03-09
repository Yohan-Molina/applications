import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeNavbarComponent } from './components/home-navbar/home-navbar.component';
import { HomeFooterComponent } from './components/home-footer/home-footer.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeNavbarComponent,
    HomeFooterComponent
  ],
  imports: [CommonModule]
})
export class HomeModule { }
