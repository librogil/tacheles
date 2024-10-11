import { Component } from '@angular/core';
import { WindowDetectorService } from 'src/app/window-detector.service';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent {

  isMobile: boolean;
  minimumHeight: string;

  constructor(private windowDetector: WindowDetectorService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.isMobile = this.windowDetector.isMobile();
    this.minimumHeight = this.windowDetector.getMinimumHeight();
  }
}