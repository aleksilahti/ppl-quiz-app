import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
