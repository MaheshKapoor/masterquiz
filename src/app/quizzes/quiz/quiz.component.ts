import {Component, Input, OnInit} from '@angular/core';
import {QuizData} from "../../model/quizData";
import * as quizJson from '../../../../src/assets/data/quizJson/sample.json';
import {ActivatedRoute} from "@angular/router";
import {GetJsonService} from "../../service/get-json.service";
import {Meta, Title} from "@angular/platform-browser";

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
  urlQuizId :string;
  constructor( private route:ActivatedRoute, public getQuizJson:GetJsonService, public meta: Meta, public title: Title) {
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
    this.meta.updateTag( {name: "description", content: this.quiz.quizTitle + this.quiz.quizDescription});
    this.meta.updateTag( {name: "keywords", content: this.quiz.quizMetaTag});
  }
}
