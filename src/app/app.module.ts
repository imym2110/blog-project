import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SubscribeSectionComponent } from './subscribe-section/subscribe-section.component';
import { BrowseCategoryComponent } from './browse-category/browse-category.component';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { BlogGridComponent } from './blog-grid/blog-grid.component';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { NgxScrollTopModule } from 'ngx-scrolltop';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SubscribeSectionComponent,
    BrowseCategoryComponent,
    HeroComponent,
    HomeComponent,
    LoginComponent,
    BlogCardComponent,
    BlogGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ShowHidePasswordModule,
    ReactiveFormsModule,
    //NgxScrollTopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
