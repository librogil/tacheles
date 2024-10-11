import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { All } from 'src/app/models/all.model';
import { Argument } from 'src/app/models/argument.model';
import { Term } from 'src/app/models/term.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SearchComponent implements OnInit {

  answerID: string;
  current: any;
  arguments: Argument[];
  terms: Term[];
  all: All;
  searchTerm: string;
  searchResults: any[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
  
  ngOnInit() {
    window.scrollTo(0, 0);
    /*
    this.activatedRoute.params.subscribe((params: Params) => {
      //this.searchTerm = params.searchTerm;
      //console.log(params);
    });
    */
    this.activatedRoute.data.subscribe((data: { terms: All }) => {
      this.all = data.terms;
    });

    this.getAnswerID();
    this.searchTerm = decodeURIComponent(this.answerID);
    this.terms = this.all.terms;
    this.arguments = this.all.arguments;
    this.searchFilter('all');
    
    console.log(decodeURIComponent(this.answerID));
    //urldec
    
    console.log(arguments);
  }

  pushCurrent(current: any, type: string) {
    this.current = current;
    this.current.type = type;
    this.searchResults.push(this.current);
  }

  searchInDictionary() {
    for (let i in this.terms) {    
      if (this.terms[i].title.includes(this.searchTerm) || this.terms[i].definition.includes(this.searchTerm)) {
        this.pushCurrent(this.terms[i], 'dictionary');
      }
    }
  }

  searchInArguments() {
    for (var i in this.arguments) {
      if (this.arguments[i].title.includes(this.searchTerm)) { 
        this.pushCurrent(this.arguments[i], 'arguments');
      }
      else {
        for (var j in this.arguments[i].answers) {
          if (this.arguments[i].answers[j].full.includes(this.searchTerm)) { 
            this.pushCurrent(this.arguments[i], 'arguments');
          }
        }
      }
    }
  }
  
  searchFilter(filterOption: string) {
    this.searchResults = [];
    switch(filterOption) {
      case 'all': {
        this.searchInDictionary();
        this.searchInArguments();
        break;
      }
      case 'dictionary': {
        this.searchInDictionary();
        break;
      }
      case 'arguments': {
        this.searchInArguments();
        break;
      }   
    }
  }

  getAnswerID() {
    let url = this.router.url;
    let splits = url.split("/");
    this.answerID = splits[splits.length - 1];
  }
}