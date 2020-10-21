import { Component, OnInit } from '@angular/core';
import * as searchJson from "../../../assets/data/searchJson/search.json"

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  search :any = (searchJson as any).default;

}
