import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SpaComponent } from './pages/spa/spa.component';
import { AngularArkitekturComponent } from './pages/angular-arkitektur/angular-arkitektur.component';
import { TypescriptComponent } from './pages/typescript/typescript.component';
import { WebbAppVsSpaComponent } from './pages/webb-app-vs-spa/webb-app-vs-spa.component';
import { AngularComponent } from './pages/angular/angular.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { KontaktComponent } from './core/kontakt/kontakt.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SpaComponent,
    AngularArkitekturComponent,
    TypescriptComponent,
    WebbAppVsSpaComponent,
    AngularComponent,
    PageNotFoundComponent,
    KontaktComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
