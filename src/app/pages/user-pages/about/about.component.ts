import { Component } from '@angular/core';
import { WindowDetectorService } from 'src/app/window-detector.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  isMobile: boolean;

  constructor(private windowDetector: WindowDetectorService) { }

  ngOnInit() {
    window.onbeforeunload = function() {window.scrollTo(0,0);}
    this.isMobile = this.windowDetector.isMobile();
  }
}