import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/user-pages/home/home.component';
import { ArgumentsComponent } from './pages/user-pages/arguments/arguments.component';

import { AboutComponent } from './pages/user-pages/about/about.component';
import { DictionaryComponent } from './pages/user-pages/dictionary/dictionary.component';

import { ArgumentsListComponent } from './pages/user-pages/arguments-list/arguments-list.component';

import { DictionaryResolverService } from './pages/user-pages/dictionary/dictionary-resolver.service';
import { ArgumentsListResolverService } from './pages/user-pages/arguments-list/arguments-list-resolver.service';
import { ArgumentComponent } from './pages/user-pages/argument/argument.component';
import { AnswerComponent } from './pages/user-pages/answer/answer.component';
import { AnswerResolverService } from './pages/user-pages/answer/answer-resolver.service';
import { SearchComponent } from './pages/user-pages/search/search.component';
import { SearchArgumentsResolverService } from './pages/user-pages/search/search-arguments-resolver.service';
import { SearchTermsResolverService } from './pages/user-pages/search/search-terms-resolver.service';
import { TermComponent } from './pages/user-pages/term/term.component';
import { TermResolverService } from './pages/user-pages/term/term-resolver.service';
import { BackgroundComponent } from './pages/user-pages/background/background.component';
import { TodayComponent } from './pages/user-pages/today/today.component';
import { NewArgumentByUserComponent } from './pages/user-actions/new-argument-by-user/new-argument-by-user.component';
import { EditAnswerByUserComponent } from './pages/user-actions/edit-answer-by-user/edit-answer-by-user.component';
import { EditAnswerByUserResolverService } from './pages/user-actions/edit-answer-by-user/edit-answer-by-user-resolver.service';
import { NewAnswerByUserResolverService } from './pages/user-actions/new-answer-by-user/new-answer-by-user-resolver.service';
import { NewAnswerByUserComponent } from './pages/user-actions/new-answer-by-user/new-answer-by-user.component';

import { ArgumentResolverService } from './pages/user-pages/argument/argument-resolver.service';
import { ArgumentsResolverService } from './pages/user-pages/arguments/arguments-resolver.service';



const routes: Routes = [


  { path: 'arguments/:argumentID', component: ArgumentComponent, resolve: { argument: ArgumentResolverService } },
 // { path: 'arguments/:argumentID', component: AnswersComponent },

  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },

  { path: 'background', component: BackgroundComponent },

  { path: 'today', component: TodayComponent },
  { path: 'dictionary', component: DictionaryComponent, resolve: {terms: DictionaryResolverService} },
  { path: 'arguments', component: ArgumentsComponent, resolve: {arguments: ArgumentsResolverService} },

  { path: 'false-arguments', component: ArgumentsListComponent, resolve: {arguments: ArgumentsListResolverService} },

  { path: 'new/:argumentID', component: NewAnswerByUserComponent, resolve: { argument: NewAnswerByUserResolverService} },

  { path: 'new', component: NewArgumentByUserComponent },
  { path: 'edit/:argumentID/:answerID', component: EditAnswerByUserComponent, resolve: { argument: EditAnswerByUserResolverService} },


  { path: 'arguments/:argumentID/:answerID', component: AnswerComponent, resolve: { argument: AnswerResolverService } },
  { path: 'irrefutable-arguments', component: ArgumentsListComponent, resolve: {arguments: ArgumentsListResolverService } },
  { path: 'true-arguments', component: ArgumentsListComponent, resolve: {arguments: ArgumentsListResolverService } },

  { path: 'search/:searchTerm', component: SearchComponent, 
    resolve: {arguments: SearchArgumentsResolverService, terms: SearchTermsResolverService} },
 
    { path: 'dictionary/:termID', component: TermComponent, resolve: { term: TermResolverService } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
