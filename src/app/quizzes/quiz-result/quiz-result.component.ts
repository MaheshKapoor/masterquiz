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

  resultMessage: string;
  resultRecommendation: string;
  resultTitle: string;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.scoreMessage();
  }

  scoreMessage(){
    if(this.totalScore === 0) {
      this.resultTitle = "Really?? You can do better";
      this.resultMessage = "You may reconsider to attempt this quiz.";
      this.resultRecommendation = "Retry the quiz and do better.";
    } else if (this.totalScore === 3) {
      this.resultTitle = "Awesome";
      this.resultMessage = "You may master by trying another one";
      this.resultRecommendation = "Wow !! you are genius, flaunt a bit and share your score to your friends.";
    } else {
      this.resultTitle = "Well Done";
      this.resultMessage = "You may reconsider to attempt this quiz.";
      this.resultRecommendation = "Well !! Lets challenge others";
    }
  }

}
