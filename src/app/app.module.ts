import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TrendingSubjectComponent } from './trending-subject/trending-subject.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

      TrendingSubjectComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
