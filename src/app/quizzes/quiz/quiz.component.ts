import {Component, Input, OnInit} from '@angular/core';
import {QuizData} from "../../model/quizData";
import * as quizJson from '../../../../src/assets/data/quizJson/sample.json';
import {ActivatedRoute} from "@angular/router";
import {GetJsonService} from "../../service/get-json.service";
import {Meta, Title} from "@angular/platform-browser";
import {QuizQuestionComponent} from "../quiz-question/quiz-question.component";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quiz : QuizData ;

  quizTitle :string ;
  showQuiz: boolean = false;
  showQuizAnswer: boolean = false;
  totalScore: number = 0;
  emptyScore: number = -1;
  urlQuizId :string;
  constructor(  private route:ActivatedRoute, public getQuizJson:GetJsonService, public meta: Meta, public title: Title) {
  }

  ngOnInit(): void {
    this.urlQuizId = this.route.snapshot.paramMap.get("quizId");
    this.getQuizJson.getQuizJsonData(this.urlQuizId).subscribe(
      (data: any) => {
        this.quiz = data.data;
        this.quizTitle = this.quiz.quizTitle;
        this.updateMetaTags();
        this.showQuiz = true;
      }
    );
  }

  onSubmit() {
    this.showQuiz = false;
    this.showQuizAnswer = true;
    console.log("test");
    console.log(this.quiz);
    this.calculateScore();
    window.scrollTo(0, 0);
  }

  calculateScore() {
    for (const question of this.quiz.questions) {
      if (question.answer == question.answerSelected) {
        this.totalScore++;
      }
    }
  }

  updateMetaTags () {
    this.title.setTitle(this.quiz.quizTitle);
    this.meta.updateTag( {name: "description", content: this.quiz.quizDescription});
    this.meta.updateTag( {name: "keywords", content: this.quiz.quizMetaTag});
    this.meta.updateTag( {name: "robots", content: "INDEX, FOLLOW"});
    this.meta.updateTag( {name: "language", content: "English"});

    this.meta.updateTag( {property: "og:title", content: this.quiz.quizTitle});
    this.meta.updateTag( {property: "", content: this.quiz.quizTitle});
    this.meta.updateTag( {property: "og:description", content: this.quiz.quizDescription});
    this.meta.updateTag( {property: "og:url", content: "https://www.gktrivia.com/quizzes/"+this.quiz.quizId});
    this.meta.updateTag( {property: "og:site_name", content: "Gktrivia"});
    this.meta.updateTag( {property: "og:type", content: "game"});
    this.meta.updateTag( {property: "og:image", content: "https://www.gktrivia.com/assets/image/"+this.quiz.quizThumbNail});
    this.meta.updateTag( {property: "fb:app_id", content: "694150900972156"});


    this.meta.updateTag( {property: "twitter:title", content: this.quiz.quizTitle});
    this.meta.updateTag( {property: "twitter:description", content: this.quiz.quizDescription});
    this.meta.updateTag( {property: "twitter:image", content: "https://www.gktrivia.com/assets/image/"+this.quiz.quizThumbNail});
    this.meta.updateTag( {property: "twitter:url", content: "https://www.gktrivia.com/quizzes/"+this.quiz.quizId});
    this.meta.updateTag( {property: "twitter:card", content: "summary_large_image"});
    this.meta.updateTag( {property: "twitter:site", content: "Gktrivia"});
    this.meta.updateTag( {property: "twitter:creator", content: "Gktrivia"});
  }
}
