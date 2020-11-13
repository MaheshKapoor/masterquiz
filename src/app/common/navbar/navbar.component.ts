import { Component, OnInit } from '@angular/core';
import {Title, Meta} from "@angular/platform-browser";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public meta: Meta, public title: Title) { }

  ngOnInit(): void {
    this.updateMetaTags();
  }


  updateMetaTags () {
    this.title.setTitle("GK Trivia");
    this.meta.updateTag( {name: "description", content: "All the best GK Trivia quiz at one place. Improve GK step by step 2020-2021."});
    this.meta.updateTag( {name: "keywords", content: "Trivia, Quiz, gk question, iq, general knowledge questions and answers, Hard Quiz"});
    this.meta.updateTag( {name: "robots", content: "INDEX, FOLLOW"});
    this.meta.updateTag( {name: "language", content: "English"});

    this.meta.updateTag( {property: "og:title", content: "GK Trivia"});
    this.meta.updateTag( {property: "og:image:alt", content: "GK Trivia"});
    this.meta.updateTag( {property: "og:description", content: "All the best GK Trivia quiz at one place. Improve GK step by step 2020-2021."});
    this.meta.updateTag( {property: "og:url", content: "https://www.gktrivia.com"});
    this.meta.updateTag( {property: "og:site_name", content: "Gktrivia"});
    this.meta.updateTag( {property: "og:type", content: "game"});
    this.meta.updateTag( {property: "og:image", content: "https://www.gktrivia.com/assets/image/hard_gk.png"});
    this.meta.updateTag( {property: "fb:app_id", content: "694150900972156"});


    this.meta.updateTag( {property: "twitter:title", content: "GK Trivia"});
    this.meta.updateTag( {property: "twitter:description", content: "All the best GK Trivia quiz at one place. Improve GK step by step 2020-2021"});
    this.meta.updateTag( {property: "twitter:image", content: "https://www.gktrivia.com/assets/image/hard_gk.png"});
    this.meta.updateTag( {property: "twitter:url", content: "https://www.gktrivia.com"});
    this.meta.updateTag( {property: "twitter:card", content: "summary_large_image"});
    this.meta.updateTag( {property: "twitter:site", content: "Gktrivia"});
    this.meta.updateTag( {property: "twitter:creator", content: "Gktrivia"});
  }

}
