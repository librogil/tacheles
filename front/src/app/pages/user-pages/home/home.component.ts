import { Component, OnInit } from '@angular/core';
import { WindowDetectorService } from 'src/app/window-detector.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isMobile: boolean;
  minimumHeight: string;
  
  constructor(private windowDetector: WindowDetectorService) { }

  ngOnInit() {
    window.onbeforeunload = function() {window.scrollTo(0,0);}
    this.minimumHeight = this.windowDetector.getMinimumHeight();
    this.isMobile = this.windowDetector.isMobile();
  }
}