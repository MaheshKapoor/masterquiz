import {Component, OnInit, Input} from '@angular/core';
import {QuizData} from "../../model/quizData";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.css']
})
export class QuizResultComponent implements OnInit {

  @Input()
  quiz : QuizData;

  @Input()
  totalScore : number;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
