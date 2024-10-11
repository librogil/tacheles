import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Argument } from 'src/app/models/argument.model';
import { Temp } from 'src/app/models/temp.model';

@Component({
  selector: 'app-new-answer-by-user',
  templateUrl: './new-answer-by-user.component.html',
  styleUrls: ['./new-answer-by-user.component.scss']
})

export class NewAnswerByUserComponent implements OnInit {

  title: string;
  argumentID: String;
  argument: Argument;
  id: string;
  index: number;
  titleInputCheck: string;
  fullInputCheck: string;
  shortInputCheck: string;
  emailInputCheck: string;
  isMobile: boolean;
  
  constructor(private apiService: APIService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.activatedRoute.data.subscribe((data: { argument: Argument }) => {
      this.argument = data.argument;
    });
    this.argumentID = this.argument._id;
    this.title = this.argument.title;
    this.getAnswerID();
    console.log(this.argument);
  }

  getAnswerID() {
    let url = this.router.url;
    let splits = url.split("/");
    this.id = splits[splits.length - 1];
  }

  submitNewArgument(title: string, short: string, full: string, email: string) {

    let tags: string[];
    let rank = 100;
    let newAnswer = {short, full, tags, rank};
    //let email = ''
    

      this.apiService.submitNewArgument(title, newAnswer, email).subscribe((temp: Temp) => {
        this.router.navigate(['']);
      });
  }

  submitNewAnswer(short: string, full: string, email: string) {
    let newAnswer = {short, full};
    let type = 2;

    this.apiService.submitNewAnswer(this.argumentID, this.title, newAnswer, email).subscribe((temp: Temp) => {
        this.router.navigate(['']);
      });
  }

  hideErrorMessage() {
  }
}