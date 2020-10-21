import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchQuizComponent} from "./search/search-quiz/search-quiz.component";
import {QuizzesComponent} from "./quizzes/quizzes/quizzes.component";
import {QuizComponent} from "./quizzes/quiz/quiz.component";


const routes: Routes = [
  {
    path   : "",
    component: SearchQuizComponent
  },
  {
    path   : "quizzes",
    component: QuizzesComponent
  },
  {
    path   : "quizzes/:quizId",
    component: QuizComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
