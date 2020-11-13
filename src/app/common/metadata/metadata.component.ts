import {Component, Input, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";
import {QuizData} from "../../model/quizData";
import {ActivatedRoute, Router} from "@angular/router";

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

  socialMessage :string ;
  quizUrl:string;

  constructor(public meta: Meta, public title: Title, private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.updateMetaTags();
    this.quizUrl = "https://www.gktrivia.com/quizzes/"+this.quiz.quizId;
  }


  updateMetaTags () {
    this.socialMessage = this.quiz.quizTitle;
    if(!(this.totalScore === null || this.totalScore <0 ) ){
      this.socialMessage = "I scored " + this.totalScore + " out of " + this.quiz.questions.length + " in " + this.quiz.quizTitle;
      this.meta.updateTag( {property: "twitter:description", content: this.socialMessage });
      this.meta.updateTag( {property: "og:description", content: this.socialMessage });
      this.meta.updateTag( {name: "description", content: this.socialMessage});
    }
  }

  fbShare() {

    let url = "http://www.facebook.com/dialog/feed?app_id=694150900972156&display=popup&link=https://www.gktrivia.com/quizzes/"+this.quiz.quizId;
    let newwindow = window.open(url, this.socialMessage , 'height=500,width=520,top=200,left=300,resizable');
    if (window.focus) {
      //newwindow.document.head.innerHTML='<meta property="og:title" content="The Rock"/><meta property="og:type" content="movie"/><meta property="og:url" content="http://www.imdb.com/title/tt0117500/"/><meta property="og:image" content="http://ia.media-imdb.com/rock.jpg"/><meta property="og:site_name" content="IMDb"/><meta property="fb:admins" content="USER_ID"/><meta property="og:description"      content="A group of U.S. Marines, under command of a renegade general, take over Alcatraz and threaten San Francisco Bay with biological weapons."/>'
      newwindow.focus()
    }
  }
  fbShareWithScore() {

    let url = "http://www.facebook.com/dialog/feed?app_id=694150900972156&display=popup&link=https://www.gktrivia.com/quizzes/"+this.quiz.quizId;
    let newwindow = window.open(url, this.socialMessage , 'height=500,width=520,top=200,left=300,resizable');
    if (window.focus) {
      newwindow.focus()
    }
  }
  findNextQuiz() {

  return  this.router.navigateByUrl('/');
  }
}
