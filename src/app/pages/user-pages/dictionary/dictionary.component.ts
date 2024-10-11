import { Component, OnInit } from '@angular/core';
import { AUTO_STYLE, animate, state, style, transition, trigger } from '@angular/animations';
import { Term } from 'src/app/models/term.model';
import { ActivatedRoute } from '@angular/router';
import { WindowDetectorService } from 'src/app/window-detector.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss'],
  animations: [
    trigger('dropdown', [
      state('false', style({ height: AUTO_STYLE, visibility: AUTO_STYLE })),
      state('true', style({ height: '0', visibility: 'hidden' })),
      transition('false => true', animate(10 + 'ms ease-in')),
      transition('true => false', animate(10 + 'ms ease-out'))
    ])
  ]
})

export class DictionaryComponent implements OnInit {
  terms: Term[];
  termDefinitionStatus: boolean[][]; // TRUE if the term's definition is closed/invisible; FALSE if it's open/visible
  isMobile: boolean;
  letters: string[];
  termsInLetters: any[][];
  minimumHeight: string;
  blackWhite = 'black';
  grayWhite = 'black';

  constructor(private activatedRoute: ActivatedRoute, private windowDetector: WindowDetectorService) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: { terms: Term[] }) => {
      this.terms = data.terms;
    })
    window.onbeforeunload = function() {window.scrollTo(0,0);}
    this.minimumHeight = this.windowDetector.getMinimumHeight();
    this.isMobile = this.windowDetector.isMobile();
    this.termsInLettersInitialisation();
    this.termDefinitionStatusInitialisation();
  }

  termDefinitionStatusInitialisation() {
    this.termDefinitionStatus = [[]];
    for (let i = 0; i < this.termsInLetters.length; i++) {
      this.termDefinitionStatus[i] = [];
      for (let j = 0; j < this.termsInLetters[i].length; j ++) {
        this.termDefinitionStatus[i][j] = true;
      }
    }
  }

  termsInLettersInitialisation() {
    this.letters = [];
    this.termsInLetters = [[]];
    var x = -1;
    for (var i in this.terms) {
      if (!this.letters.includes(this.terms[i].title[0])) {
        x++;
        this.termsInLetters[x] = [];
        this.letters.push(this.terms[i].title[0]);
        this.termsInLetters[x].push(this.terms[i]);
      } 
      else {
        this.termsInLetters[x].push(this.terms[i]);
      }
    }
  }

  toggle(i: number, j: number) {
    this.termDefinitionStatus[i][j] = !this.termDefinitionStatus[i][j];
  }

  copy(i: number, j: number) {
    navigator.clipboard.writeText(this.termsInLetters[i][j].definition);
  }
}