import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'index.html', component: HomeComponent },
    { path: 'home', component: HomeComponent, pathMatch: 'full' },
    { path: 'detail/:id', component: DetailComponent, pathMatch: 'full' },
    { path: 'error', component: ErrorComponent },
    { path: '**', component: NoPageFoundComponent }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes,{
      scrollPositionRestoration: 'top'
    })],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }