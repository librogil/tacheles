import { Component } from '@angular/core';
import { WindowDetectorService } from 'src/app/window-detector.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent {

  isMobile: boolean;

  constructor(private windowDetector: WindowDetectorService) { }

  ngOnInit() {
    this.isMobile = this.windowDetector.isMobile();
  }
}