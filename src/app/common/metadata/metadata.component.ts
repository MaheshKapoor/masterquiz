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
    if(!(this.totalScore === null || this.totalScore > 0 || isNaN(this.totalScore)) ){
      this.updateMetaTags();
    }else{
      this.updateMetaTagsWithScore();
    }
  }


  updateMetaTags () {
    this.title.setTitle(this.quiz.quizTitle);
    this.meta.updateTag( {name: "description", content: this.quiz.quizTitle + this.quiz.quizDescription});
    this.meta.updateTag( {name: "keywords", content: this.quiz.quizMetaTag});
  }

  updateMetaTagsWithScore () {
    this.title.setTitle("I scored " + this.totalScore + "/" + this.quiz.questions.length + " in " + this.quiz.quizTitle);
    this.meta.updateTag( {name: "description", content: this.quiz.quizTitle + this.quiz.quizDescription});
    this.meta.updateTag( {name: "keywords", content: this.quiz.quizMetaTag});
  }

  fbShare() {
    this.updateMetaTags();
    /// let url = 'http://www.facebook.com/sharer.php?u='+ 'https://practisepoint.com/quiz?id=DKTNSW00E181003020';
    let url = "http://www.facebook.com/dialog/feed?app_id=694150900972156&display=popup&link=https://masterquiz-366c5.web.app/quizzes/" + this.route.snapshot.paramMap.get("quizId"); //TODO
    let newwindow = window.open(url, 'challenge to my friends ', 'height=500,width=520,top=200,left=300,resizable');
    if (window.focus) {
      newwindow.focus()
    }
  }

  fbShareWithScore() {
    this.updateMetaTagsWithScore();
    /// let url = 'http://www.facebook.com/sharer.php?u='+ 'https://practisepoint.com/quiz?id=DKTNSW00E181003020';
    let url = "http://www.facebook.com/dialog/feed?app_id=694150900972156&display=popup&link=https://masterquiz-366c5.web.app/quizzes/" + this.route.snapshot.paramMap.get("quizId"); //TODO
    let newwindow = window.open(url, 'challenge to my friends ', 'height=500,width=520,top=200,left=300,resizable');
    if (window.focus) {
      newwindow.focus()
    }
  }
}
