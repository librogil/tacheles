import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Argument } from 'src/app/models/argument.model';
import { Location } from '@angular/common';
import { Temp } from 'src/app/models/temp.model';
import { WindowDetectorService } from 'src/app/window-detector.service';

@Component({
  selector: 'app-edit-answer-by-user',
  templateUrl: './edit-answer-by-user.component.html',
  styleUrls: ['./edit-answer-by-user.component.scss']
})

export class EditAnswerByUserComponent implements OnInit {

  argument: Argument;
  argumentID: String;
  answerID: string;
  short: string;
  full: string;
  title: string;
  id: string;
  index: number;
  titleInputCheck: string;
  fullInputCheck: string;
  shortInputCheck: string;
  emailInputCheck: string;
  isMobile: boolean;
  
  constructor(private windowDetector: WindowDetectorService, private apiService: APIService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.activatedRoute.data.subscribe((data: { argument: Argument }) => {
      this.argument = data.argument;
    });
      this.argumentID = this.argument._id;
      this.getAnswerID();
      this.getSelectedAnswer();
      this.title = this.argument.title;
      this.short = this.argument.answers[this.index].short;
      this.isMobile = this.windowDetector.isMobile();
      
  }

  getAnswerID() {
    let url = this.router.url;
    let splits = url.split("/");
    this.answerID = splits[splits.length - 1];
  }

  submitEditedAnswer(short: string, full: string, email: string) {
    let tags: string[];
    let rank = 100;
    let newAnswer = {short, full};
    let type = 3;

    this.apiService.submitEditedAnswer(this.argumentID, this.answerID, this.title, newAnswer, email).
    subscribe((temp: Temp) => { this.router.navigate(['']);
    });
  }

  getSelectedAnswer() {
    for (let i = 0; i < this.argument.answers.length; i++) {
     if (this.argument.answers[i]._id == this.answerID) {
      this.index = i;
     }
    }
  }

  hideErrorMessage() {
  }
}