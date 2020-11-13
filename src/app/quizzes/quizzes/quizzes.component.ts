import { Component, OnInit } from '@angular/core';
import * as searchJson from "../../../assets/data/searchJson/search.json"
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

  constructor(public meta: Meta, public title: Title) { }

  ngOnInit(): void {
    this.updateMetaTags();
  }

  search :any = (searchJson as any).default;

  updateMetaTags () {
    this.title.setTitle("All quiz at one place");
    this.meta.updateTag( {name: "description", content: "All quiz under one umbrella, find you quiz."});
    this.meta.updateTag( {name: "keywords", content: "Trivia, Quiz, gk question, iq, general knowledge questions, Puzzles quiz"});
    this.meta.updateTag( {name: "robots", content: "INDEX, FOLLOW"});
    this.meta.updateTag( {name: "language", content: "English"});

    this.meta.updateTag( {property: "og:title", content: "All quiz at one place"});
    this.meta.updateTag( {property: "og:description", content: "All quiz under one umbrella, find you quiz"});
    this.meta.updateTag( {property: "og:url", content: "https://www.gktrivia.com/quizzes"});
    this.meta.updateTag( {property: "og:site_name", content: "Gktrivia"});
    this.meta.updateTag( {property: "og:type", content: "game"});
    this.meta.updateTag( {property: "og:image", content: "https://www.gktrivia.com/assets/image/hard_gk.png"});
    this.meta.updateTag( {property: "fb:app_id", content: "694150900972156"});


    this.meta.updateTag( {property: "twitter:title", content: "All quiz at one place"});
    this.meta.updateTag( {property: "twitter:description", content: "All quiz under one umbrella, find you quiz"});
    this.meta.updateTag( {property: "twitter:image", content: "https://www.gktrivia.com/assets/image/hard_gk.png"});
    this.meta.updateTag( {property: "twitter:url", content: "https://www.gktrivia.com/quizzes"});
    this.meta.updateTag( {property: "twitter:card", content: "summary_large_image"});
    this.meta.updateTag( {property: "twitter:site", content: "Gktrivia"});
    this.meta.updateTag( {property: "twitter:creator", content: "Gktrivia"});
  }
}
