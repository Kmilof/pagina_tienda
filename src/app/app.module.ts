import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { AdminComponent } from './admin/admin.component';
import { ButtonModule } from 'primeng/button';
import { CardProductComponent } from './card-product/card-product.component';

import {CarouselModule} from 'primeng/carousel';
import { HttpClientModule } from '@angular/common/http';
import {ToastModule} from 'primeng/toast';
import { MenubarComponent } from './menubar/menubar.component';
import { TitleH1Component } from './title-h1/title-h1.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { MaleComponent } from './male/male.component';
import { FemaleComponent } from './female/female.component';
import { KidsComponent } from './kids/kids.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    NavigationComponent,
    SkeletonComponent,
    FooterComponent,
    CardProductComponent,
    MenubarComponent,
    TitleH1Component,
    HomeComponent,
    NewsComponent,
    MaleComponent,
    FemaleComponent,
    KidsComponent,
    CarouselComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    DialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    InputTextModule,
    MenubarModule,
    ButtonModule,
    CarouselModule,
    HttpClientModule,
    FormsModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
