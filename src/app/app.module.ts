import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './_components/header/header.component';
import { FooterComponent } from './_components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CarouselComponent } from './_components/carousel/carousel.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductDetailComponent,
    CarouselComponent,
    ToDoListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
