import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WindowDetectorService } from 'src/app/window-detector.service';
import { Argument } from 'src/app/models/argument.model';

@Component({
  selector: 'app-arguments',
  templateUrl: './arguments.component.html',
  styleUrls: ['./arguments.component.scss']
})
export class ArgumentsComponent implements OnInit {

  arguments: Argument[];
  isMobile: boolean;
  minimumHeight: string;
  argumentBackground: string[];
  argumentBackgroundColor = 'black';


  constructor(private activatedRoute: ActivatedRoute, private windowDetector: WindowDetectorService) { }

  ngOnInit() {
    window.onbeforeunload = function() {window.scrollTo(0,0);}
    this.activatedRoute.data.subscribe((data: { arguments: Argument[] }) => {
      this.arguments = data.arguments; 
    })
    this.minimumHeight = this.windowDetector.getMinimumHeight();
    this.isMobile = this.windowDetector.isMobile();
    console.log(this.arguments);
    this.setBackgroundColors();
  }

  setBackgroundColors() {
    this.argumentBackground = [''];
    for (let i = 0; i < this.arguments.length; i ++) {
      switch(this.arguments[i].type) {
        case 'false': {
          this.argumentBackground[i] = 'var(--red)';
          break; }
        case 'true': {
          this.argumentBackground[i] = 'var(--blue)';
          break; }
        case 'irrefutable': {
          this.argumentBackground[i] = 'var(--dark-gray)';
          break; }
      }
    }
  }

  setType(type: string) {
    this.windowDetector.setType(type);
  }
}