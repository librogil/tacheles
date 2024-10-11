import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WindowDetectorService } from 'src/app/window-detector.service';
import { Temp } from 'src/app/models/temp.model';
import { APIService } from 'src/app/api.service';

@Component({
  selector: 'app-new-argument-by-user',
  templateUrl: './new-argument-by-user.component.html',
  styleUrls: ['./new-argument-by-user.component.scss']
})
export class NewArgumentByUserComponent implements OnInit {

  titleInputCheck: string;
  fullInputCheck: string;
  shortInputCheck: string;
  emailInputCheck: string;
  isMobile: boolean;

  constructor(private windowDetector: WindowDetectorService, private router: Router, private apiService: APIService) { }

  ngOnInit() {
    window.onbeforeunload = function() {window.scrollTo(0,0);}
    this.isMobile = this.windowDetector.isMobile();
  }

  submitNewArgument(title: string, short: string, full: string, email: string) {

    let tags: string[];
    let rank = 100;
    let newAnswer = {short, full, tags, rank};
    this.apiService.submitNewArgument(title, newAnswer, email).subscribe((temp: Temp) => {
      this.router.navigate(['']);
    });
  }
}