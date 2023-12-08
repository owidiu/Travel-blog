import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ImageCarouselComponent } from './components/image-carousel/image-carousel.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CardCarouselComponent } from './components/card-carousel/card-carousel.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ImageCarouselComponent,
    SearchBarComponent,
    CardCarouselComponent,
    CardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
