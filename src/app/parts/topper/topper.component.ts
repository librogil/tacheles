import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WindowDetectorService } from 'src/app/window-detector.service';

@Component({
  selector: 'app-topper',
  templateUrl: './topper.component.html',
  styleUrls: ['./topper.component.scss']
})

export class TopperComponent implements OnInit {
  
  isMobile: boolean;
  backgroundColor: string;
  logoTitleColor: string;
  logoSubtitleColor: string;
  desktopTopperDivider: string;
  topperLinkColor: string;
  inputColor: string;
  searchIconColor: string;
  searchInput = '';
  menuIconColor: string;
  //mobileSeachIcon: string;

  constructor(private router: Router, private windowDetector: WindowDetectorService) { }
  @Input() heights;
  @Input() type;

  ngOnInit() {
    this.isMobile = this.windowDetector.isMobile();
    this.setStyles();
  }

  setStyles() {
    if (window.location.href.indexOf("false") > -1 || (window.location.href.indexOf("true") > -1)
    || (this.type == 'false') || (this.type == 'true'))
      {
      this.logoTitleColor = this.logoSubtitleColor = this.desktopTopperDivider =
      this.topperLinkColor = this.inputColor = this.topperLinkColor = 'white';
      this.searchIconColor = "./../../../../assets/search-white.svg"; 
      this.menuIconColor = "./../../../../assets/menu-white.svg";
      if (window.location.href.indexOf("false") > -1 || (this.type == 'false')) {
        this.backgroundColor = 'rgba(164, 17, 17, 1)';
      }
      else {
        this.backgroundColor = 'rgba(17, 95, 164, 1)';
      }
    } else {
      this.backgroundColor = 'white';
      this.searchIconColor = "./../../../../assets/search-black.svg"; 
      this.menuIconColor = "./../../../../assets/menu-black.svg";
    }
  }

  inputStyle(): Object {
    if (window.location.href.indexOf("false") > -1 || (window.location.href.indexOf("true") > -1)
    || (this.type == 'false') || (this.type == 'true')) {
        return {color: this.inputColor, background: 'url(./../../../assets/search-white.svg)', 'background-repeat': 'no-repeat',
          'background-position': '230px 9px' 
        }
    }
    return {}
  }

  search() {
    if (document.getElementById('search-input-id')) {
      document.getElementById('search-input-id').addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
          this.router.navigate(['/search', this.searchInput]);
        }
      })
    }  
  }

  setType(type: string) {
    this.windowDetector.setType(type);
  }
}