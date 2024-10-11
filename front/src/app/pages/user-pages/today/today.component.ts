import { Component } from '@angular/core';
import { WindowDetectorService } from 'src/app/window-detector.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent {

  isMobile: boolean;
  minimumHeight: string

  constructor(private windowDetector: WindowDetectorService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.isMobile = this.windowDetector.isMobile();
    this.minimumHeight = this.windowDetector.getMinimumHeight();
  }
}