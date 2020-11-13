import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchQuizComponent } from './search/search-quiz/search-quiz.component';
import { SearchResultComponent } from './search/search-result/search-result.component';
import { QuizzesComponent } from './quizzes/quizzes/quizzes.component';
import { QuizComponent } from './quizzes/quiz/quiz.component';
import { QuizQuestionComponent } from './quizzes/quiz-question/quiz-question.component';
import { QuizAnswerComponent } from './quizzes/quiz-answer/quiz-answer.component';
import { QuizResultComponent } from './quizzes/quiz-result/quiz-result.component';
import { MetadataComponent } from './common/metadata/metadata.component';
import {NgArrayPipesModule} from "ngx-pipes";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { PrivacyComponent } from './common/privacy/privacy.component';
import { AboutusComponent } from './common/aboutus/aboutus.component';
import { DisclaimerComponent } from './common/disclaimer/disclaimer.component';
import { TermsComponent } from './common/terms/terms.component';
import { AustraliaComponent } from './quizzes/australia/australia.component';
import { CountryComponent } from './quizzes/country/country.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchQuizComponent,
    SearchResultComponent,
    QuizzesComponent,
    QuizComponent,
    QuizQuestionComponent,
    QuizAnswerComponent,
    QuizResultComponent,
    MetadataComponent,
    NavbarComponent,
    FooterComponent,
    PrivacyComponent,
    AboutusComponent,
    DisclaimerComponent,
    TermsComponent,
    AustraliaComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgArrayPipesModule,
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
