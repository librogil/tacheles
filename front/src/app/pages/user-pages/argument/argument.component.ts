import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WindowDetectorService } from 'src/app/window-detector.service';
import { Argument } from 'src/app/models/argument.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-argument',
  templateUrl: './argument.component.html',
  styleUrls: ['./argument.component.scss']
})

export class ArgumentComponent implements OnInit {

  type: string;
  argument: Argument;
  answers: any[];
  backgroundColor: string;
  isMobile: boolean;
  minimumHeight: string;
  argumentTitleColor: string;
  shortAnswerColor: string;
  textColor: string;
  copyIconSource: string;
  border: string;
  actionButtonColor: string;
  actionButtonBorder: string;
  url: string;
  dividerBorder: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private windowDetector: WindowDetectorService) { }

  ngOnInit() {
    window.onbeforeunload = function() {window.scrollTo(0,0);}
    this.activatedRoute.data.subscribe((data: { argument: Argument }) => {
      this.argument = data.argument;
      this.answers = data.argument.answers;     
      this.type = this.argument.type;
    });
    this.setStyles();
    this.isMobile = this.windowDetector.isMobile();
    this.minimumHeight = this.windowDetector.getMinimumHeight();
    console.log(this.argument);
  }

  back() {

    
      switch(this.type) {
        case 'false':
          this.router.navigate(['/false-arguments']);
          break;
        //  return this.apiService.getFalseArguments();
        case 'true':
          this.router.navigate(['/true-arguments']);
          //this.url = 'true-arguments';
          break;
      //    return this.apiService.getTrueArguments();
        case 'irrefutable':
          this.router.navigate(['/irrefutable-arguments']);
          break;
    //      return this.apiService.getIrrefutableArguments();
      }
    

  }

  setStyles() {
    if (this.type == 'false' || (this.type == 'true')) {
      this.actionButtonColor = this.textColor = this.argumentTitleColor = this.shortAnswerColor = 'white';
      this.copyIconSource = "./../../../../assets/copy-white.svg";
      this.border = '1px solid white';
      this.actionButtonBorder = this.dividerBorder = '3px white solid';
      if (this.type == 'false') {
        this.backgroundColor = 'rgba(164, 17, 17, 1)';
      }
      else {
        this.backgroundColor = 'rgba(17, 95, 164, 1)';
      }
    } else {
      this.argumentTitleColor = '#383838';
      this.textColor = this.shortAnswerColor = 'black';
      this.copyIconSource = "./../../../../assets/copy-black.svg";
      this.border = '1px solid black';
      this.actionButtonColor = 'var(--variable-collection-gray-700)';
      this.actionButtonBorder = this.dividerBorder = '3px var(--dark-gray) solid';
    }
  }

  copy(i: number) {
    navigator.clipboard.writeText(this.answers[i].short);
  }
}