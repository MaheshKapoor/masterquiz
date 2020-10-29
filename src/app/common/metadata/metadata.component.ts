import {Component, Input, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";
import {QuizData} from "../../model/quizData";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['./metadata.component.css']
})
export class MetadataComponent implements OnInit {

  @Input()
  quiz : QuizData;
  @Input()
  totalScore : number;

  constructor(public meta: Meta, public title: Title, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.updateMetaTags();
  }


  updateMetaTags () {
    if(!(this.totalScore === null || this.totalScore <0 || isNaN(this.totalScore)) ){
      this.title.setTitle(this.quiz.quizTitle);
    }else{
      this.title.setTitle("I scored " + this.totalScore + " out of " + this.quiz.questions.length + " in " + this.quiz.quizTitle);
    }
  }

  fbShare() {
    this.updateMetaTags();
    let url = "http://www.facebook.com/dialog/feed?app_id=694150900972156&display=popup&link=https://www.gktrivia.com/quizzes/"+this.quiz.quizId; //TODO
    let newwindow = window.open(url, this.quiz.quizDescription , 'height=500,width=520,top=200,left=300,resizable');
    if (window.focus) {
      newwindow.focus()
    }
  }

}
