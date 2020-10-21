import {Component, OnInit, Input} from '@angular/core';
import {QuizData} from "../../model/quizData";
@Component({
  selector: 'app-quiz-answer',
  templateUrl: './quiz-answer.component.html',
  styleUrls: ['./quiz-answer.component.css']
})
export class QuizAnswerComponent implements OnInit {

  @Input()
  quiz : QuizData;

  @Input()
  totalScore : number;

  constructor() { }

  ngOnInit(): void {
  }

}
