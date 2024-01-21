import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { HackerNewsService } from './services/hacker-news.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { ErrorComponent } from './error/error.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    ErrorComponent,
    NoPageFoundComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([])
  ],
  providers: [
    HackerNewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
