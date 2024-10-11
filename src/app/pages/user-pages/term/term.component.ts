import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WindowDetectorService } from 'src/app/window-detector.service';
import { Term } from 'src/app/models/term.model';

@Component({
  selector: 'app-answer',
  templateUrl: './term.component.html',
  styleUrls: ['./term.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class TermComponent implements OnInit {


  answerID: string;
  index: number;
  isMobile: boolean;
  minimumHeight: string;

  type: string;
  
  answers: any[];
  backgroundColor: string;
  
  minHeight: string;
  argumentTitleColor: string;
  shortAnswerColor: string;
  textColor: string;
  copyIconSource: string;
  border: string;
  term: Term;

  constructor(private activatedRoute: ActivatedRoute, private windowDetector: WindowDetectorService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.activatedRoute.data.subscribe((data: { term: Term }) => {
      this.term = data.term;
    });
    this.isMobile = this.windowDetector.isMobile();
    this.minimumHeight = this.windowDetector.getMinimumHeight();
  }
}