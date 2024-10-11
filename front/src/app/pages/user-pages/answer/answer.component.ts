import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Argument } from 'src/app/models/argument.model';
import { Source } from 'src/app/models/source.model';
import { WindowDetectorService } from 'src/app/window-detector.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class AnswerComponent implements OnInit {

  isMobile: boolean;
  minimumHeight: string;
  type: string;

  argument: Argument;
  answerID: string;
  index: number;
  
  answers: any[];
  backgroundColor: string;
  bookIcon: string;
  linkIcon: string;
  border: string;
  actionButtonColor: string;
  actionButtonBorder: string;
  dividerBorder: string;
  blackWhite: string;
  grayWhite: string;
  sources: any[];
  answer: any;
  types: string[];
  isBook: boolean[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private windowDetector: WindowDetectorService) { }

  ngOnInit() {
    window.onbeforeunload = function() {window.scrollTo(0,0);}
    this.activatedRoute.data.subscribe((data: { argument: Argument }) => {
      this.argument = data.argument;
      this.type = this.argument.type;
      
    });
    this.isMobile = this.windowDetector.isMobile();
    this.minimumHeight = this.windowDetector.getMinimumHeight();
    this.getAnswerID();
    this.getSelectedAnswer();
    this.setStyles();
    this.getAnswer();
    this.getSources();
    console.log(this.answer);
    console.log(this.sources);
  }

  getAnswer() {
    this.answer = this.argument.answers[0];
  }

  getSources() {
    this.sources = [];
    this.types = [];
    this.isBook = [];
    for (let i = 0; i < this.answer.sources.length; i ++) {
      this.sources[i] = this.answer.sources[i];
      this.types[i] = this.sources[i].type;
      if (this.types[i] == 'book') {
        this.isBook[i] = true;
      } else {
        this.isBook[i] = false;
      }
    }
    

  }

  getAnswerID() {
    let url = this.router.url;
    let splits = url.split("/");
    this.answerID = splits[splits.length - 1];
  }

  getSelectedAnswer() {
    for (let i = 0; i < this.argument.answers.length; i++) {
     if (this.argument.answers[i]._id == this.answerID) {
      this.index = i;
     }
    }
  }

  setStyles() {
    this.type = this.argument.type;
    console.log(this.type);
    if (this.type == 'false' || (this.type == 'true')) {
      this.grayWhite = this.blackWhite = 'white';
      this.bookIcon = "./../../../../assets/book-white.svg";
      this.linkIcon = "./../../../../assets/link-white.svg";
      this.border = '1px solid white';
      this.actionButtonBorder = this.dividerBorder = '3px white solid';
      if (this.type == 'false') {
        this.backgroundColor = 'var(--red)';
      }
      else {
        this.backgroundColor = 'rgba(17, 95, 164, 1)';
      }
    } else {
      this.grayWhite = 'var(--dark-gray)';
      this.blackWhite = 'black';
      this.bookIcon = "./../../../../assets/book-black.svg";
      this.linkIcon = "./../../../../assets/link-black.svg";
      this.border = '1px solid var(--dark-gray)';
      this.actionButtonBorder = this.dividerBorder = '3px var(--dark-gray) solid';
    }
  }

  editAnswer() {
    this.router.navigate(['/edit', this.argument._id, this.answerID]);
  }
}