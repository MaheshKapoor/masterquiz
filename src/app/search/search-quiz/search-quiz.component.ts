import { Component, OnInit } from '@angular/core';
import * as searchJson from "../../../assets/data/searchJson/search.json";
import {DatePipe} from "@angular/common";
import {SearchData} from "../../model/searchData"
import {GetJsonService} from "../../service/get-json.service";

@Component({
  selector: 'app-search-quiz',
  templateUrl: './search-quiz.component.html',
  styleUrls: ['./search-quiz.component.css']
})
export class SearchQuizComponent implements OnInit {
  data : any;
  public filterText;
  public filterDomain;
  public filterLanguage;
  public filterLevel;
  submitted = false;
  public loadSearch = false;
  filteredData = [];

  constructor(public getSearchJson:GetJsonService) { }

  ngOnInit(): void {
    console.log(searchJson)

    this.getSearchJson.getSearchJsonData("search").subscribe(
      (data: any) => {
        this.data = data;
        this.filteredData = this.data;
        this.loadSearch = true;

      }
    );
  }


  onSubmit() {

    this.submitted = true;
    console.log(this.filteredData);

    if (this.filterText && this.filterDomain && this.filterLanguage && this.filterLevel) {
      //Case1: text, domain, language, level filters
      this.filteredData = this.data.filter(
        datum => ((datum.name.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1 || datum.level.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1 ||
        datum.description.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1) &&
        (datum.domain.indexOf(this.filterDomain) > -1 ) &&
        (datum.language.indexOf(this.filterLanguage) > -1 ) &&
        (datum.level.indexOf(this.filterLevel) > -1 )) );
      console.log("text, domain, language, level filters" + this.filteredData);

    } else if (this.filterDomain && this.filterLanguage && this.filterLevel) {
      //Case1: text, domain, language, level filters
      this.filteredData = this.data.filter(
        datum => ((datum.domain.indexOf(this.filterDomain) > -1 ) &&
        (datum.language.indexOf(this.filterLanguage) > -1 ) &&
        (datum.level.indexOf(this.filterLevel) > -1 )) );
      console.log("domain, language, level filters" + this.filteredData);

    } else if (this.filterText && this.filterDomain && this.filterLanguage) {
      //Case4: text, domain, language filters
      this.filteredData = this.data.filter(
        datum => ((datum.domain.indexOf(this.filterDomain) > -1 ) &&
        (datum.language.indexOf(this.filterLanguage) > -1 )));
      console.log("text, domain, language filters" + this.filteredData);

    } else if (this.filterText && this.filterDomain && this.filterLevel) {
      //Case4: text, domain, level filters
      this.filteredData = this.data.filter(
        datum => ((datum.domain.indexOf(this.filterDomain) > -1 ) &&
        (datum.level.indexOf(this.filterLevel) > -1 )));
      console.log("text, domain, level filters" + this.filteredData);

    } else if (this.filterText && this.filterLevel && this.filterLanguage) {
      //Case4: text, language, level filters
      this.filteredData = this.data.filter(
        datum => ((datum.language.indexOf(this.filterLanguage) > -1 ) &&
        (datum.level.indexOf(this.filterLevel) > -1 )));
      console.log("text, language, level filters" + this.filteredData);

    } else if (this.filterDomain && this.filterLanguage) {
      //Case4: domain, language filters
      this.filteredData = this.data.filter(
        datum => ((datum.domain.indexOf(this.filterDomain) > -1 ) &&
        (datum.language.indexOf(this.filterLanguage) > -1 )));
      console.log("domain, language filters" + this.filteredData);

    } else if (this.filterDomain && this.filterLevel) {
      //Case4: domain, level filters
      this.filteredData = this.data.filter(
        datum => ((datum.domain.indexOf(this.filterDomain) > -1 ) &&
        (datum.level.indexOf(this.filterLevel) > -1 )));
      console.log("domain, level filters" + this.filteredData);

    } else if (this.filterLevel && this.filterLanguage) {
      //Case4: language, level filters
      this.filteredData = this.data.filter(
        datum => ((datum.language.indexOf(this.filterLanguage) > -1 ) &&
        (datum.level.indexOf(this.filterLevel) > -1 )));
      console.log("language, level filters" + this.filteredData);

    } else if (this.filterText && this.filterDomain) {
      //Case2: text, domain filters
      this.filteredData = this.data.filter(
        datum => ((datum.name.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1 || datum.level.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1 ||
        datum.description.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1) &&
        (datum.domain.indexOf(this.filterDomain) > -1 )));
      console.log("text, domain filters " + this.filteredData);

    } else if (this.filterText && this.filterLanguage) {
      //Case3: text, language filters
      this.filteredData = this.data.filter(
        datum => ((datum.name.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1 || datum.level.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1 ||
        datum.description.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1) &&
        (datum.language.indexOf(this.filterLanguage) > -1 ) ) );
      console.log("text, language filters" + this.filteredData);

    } else if (this.filterText && this.filterLevel) {
      //Case3: text, level filters
      this.filteredData = this.data.filter(
        datum => ((datum.name.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1 || datum.level.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1 ||
        datum.description.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1) &&
        (datum.level.indexOf(this.filterLevel) > -1 )) );
      console.log("text, level filters" + this.filteredData);

    } else if (this.filterText) {
      //Case5: only text filter
      this.filteredData = this.data.filter(
        datum => (datum.name.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1 || datum.level.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1) ||
        datum.description.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1);
      console.log("filter text" + this.filteredData);

    } else if (this.filterDomain) {
      //Case6: domain filters
      this.filteredData = this.data.filter(
        datum => (datum.domain.indexOf((this.filterDomain)) > -1));
      console.log("domain filters" + this.filteredData);

    } else if(this.filterLanguage){
      //Case7: language filters
      this.filteredData = this.data.filter(
        datum => (datum.language.indexOf(this.filterLanguage) > -1 ));
      console.log("language filters" + this.filteredData);

    } else if(this.filterLevel){
      //Case7: level filters
      this.filteredData = this.data.filter(
        datum => (datum.level.indexOf(this.filterLevel) > -1 ));
      console.log("level filters" + this.filteredData);
    }
  }
}
