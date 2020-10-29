import {Component, Input, OnInit, Injectable} from '@angular/core';
import {QuizData} from "../../model/quizData";

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.css']
})
@Injectable()
export class QuizQuestionComponent implements OnInit {

  @Input()
  quiz : QuizData;

  constructor() { }

  ngOnInit(): void {
    console.log(this.quiz);
  }

  onAnswerSelection(questionId:number, index:number) {
    this.quiz.questions[questionId].answerSelected = index;
  }

}
