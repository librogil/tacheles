import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WindowDetectorService } from 'src/app/window-detector.service';
import { Argument } from 'src/app/models/argument.model';

@Component({
  selector: 'app-arguments-list',
  templateUrl: './arguments-list.component.html',
  styleUrls: ['./arguments-list.component.scss']
})
export class ArgumentsListComponent {

  isMobile: boolean;
  backgroundColor: string;
  logoTitleColor: string;
  logoSubtitleColor: string;
  desktopTopperDivider: string;
  topperLinkColor: string;
  inputColor: string;
  searchIconColor: string;
  searchInput = '';
  titleColor: string;
  argumentColor: string;
  argumentBackgroundColor: string;
  quoteDecorationColor: string;
  textColor: string;
  actionButtonColor: string;
  actionButtonBorder: string;
  minimumHeight: string;
  arguments: Argument[];
  headline: string;
  isFalse: boolean;
  isTrue: boolean;

  constructor(private activatedRoute: ActivatedRoute, private windowDetector: WindowDetectorService) { }

  ngOnInit() {
    window.onbeforeunload = function() {window.scrollTo(0,0);}
    this.activatedRoute.data.subscribe((data: { arguments: Argument[] }) => {
      this.arguments = data.arguments; 
    })
    this.isMobile = this.windowDetector.isMobile();
    this.minimumHeight = this.windowDetector.getMinimumHeight();
    console.log(this.minimumHeight);
    this.setContent();
  }

  setContent() {
    if (window.location.href.indexOf("false") > -1 || (window.location.href.indexOf("true") > -1)) {
      this.actionButtonColor = this.textColor = this.quoteDecorationColor = this.argumentBackgroundColor = 
      this.titleColor = 'white';
      this.actionButtonBorder = '3px white solid';
      if (window.location.href.indexOf("false") > -1) {
        this.isFalse = true;
        this.headline = 'טיעונים שקריים';
        this.backgroundColor = 'rgba(164, 17, 17, 1)';
        this.argumentColor = 'var(--variable-collection-red-500)';
      }
      else {
        this.isTrue = true;
        this.backgroundColor = 'rgba(17, 95, 164, 1)';
        this.argumentColor = 'var(--variable-collection-blue-500)';
        this.headline = 'טיעונים אמיתיים';
      }
    } else {
      this.headline = 'טיעונים בלתי ניתנים להפרכה';
      this.argumentColor = this.backgroundColor = 'white';
      this.titleColor = this.actionButtonColor = 
      this.quoteDecorationColor = this.argumentBackgroundColor = 'var(--variable-collection-gray-700)';
      this.textColor = 'black';
      this.actionButtonBorder = '3px var(--variable-collection-gray-700) solid';
    }
  }
}