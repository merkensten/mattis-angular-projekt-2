import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AngularComponent } from './pages/angular/angular.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SpaComponent } from './pages/spa/spa.component';
import { AngularArkitekturComponent } from './pages/angular-arkitektur/angular-arkitektur.component';
import { TypescriptComponent } from './pages/typescript/typescript.component';
import { WebbAppVsSpaComponent } from './pages/webb-app-vs-spa/webb-app-vs-spa.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'angular', component: AngularComponent },
  { path: 'spa', component: SpaComponent },
  { path: 'angular-arkitektur', component: AngularArkitekturComponent },
  { path: 'typescript', component: TypescriptComponent },
  { path: 'webb-app-vs-spa', component: WebbAppVsSpaComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
