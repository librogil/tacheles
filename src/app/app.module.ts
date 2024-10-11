import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/user-pages/home/home.component';
import { ArgumentsComponent } from './pages/user-pages/arguments/arguments.component';

import { AboutComponent } from './pages/user-pages/about/about.component';
import { TopperComponent } from './parts/topper/topper.component';
import { DictionaryComponent } from './pages/user-pages/dictionary/dictionary.component';
import { FooterComponent } from './parts/footer/footer.component';
import { ArgumentsListComponent } from './pages/user-pages/arguments-list/arguments-list.component';


import { ArgumentComponent } from './pages/user-pages/argument/argument.component';
import { AnswerComponent } from './pages/user-pages/answer/answer.component';
import { SearchComponent } from './pages/user-pages/search/search.component';
import { TermComponent } from './pages/user-pages/term/term.component';
import { BackgroundComponent } from './pages/user-pages/background/background.component';
import { TodayComponent } from './pages/user-pages/today/today.component';
import { MargumentsComponent } from './pages/mobile/marguments/marguments.component';
import { MfalseArgumentsComponent } from './pages/mobile/mfalse-arguments/mfalse-arguments.component';
import { MargumentComponent } from './pages/mobile/margument/margument.component';
import { MdictionaryComponent } from './pages/mobile/mdictionary/mdictionary.component';
import { MaddComponent } from './pages/mobile/madd/madd.component';
import { EditAnswerByUserComponent } from './pages/user-actions/edit-answer-by-user/edit-answer-by-user.component';
import { NewAnswerByUserComponent } from './pages/user-actions/new-answer-by-user/new-answer-by-user.component';
import { NewArgumentByUserComponent } from './pages/user-actions/new-argument-by-user/new-argument-by-user.component';


@NgModule({
  declarations: [
    AppComponent,

    TopperComponent,
    HomeComponent,
    ArgumentsComponent,

    AboutComponent,
    DictionaryComponent,
    FooterComponent,
    ArgumentsListComponent,

    ArgumentComponent,
    AnswerComponent,
    SearchComponent,
    TermComponent,
    BackgroundComponent,
    TodayComponent,
    MargumentsComponent,
    MfalseArgumentsComponent,
    MargumentComponent,
    MdictionaryComponent,
    MaddComponent,
    EditAnswerByUserComponent,
    NewAnswerByUserComponent,
    NewArgumentByUserComponent





  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
