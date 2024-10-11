import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowDetectorService {

  type: string;

  deviceDetector () {

    if (navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)) {
      return true;
    } else {
      return false;
    }
  }

  isMobile () {

    if (navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)) {
      return true;
    } else {
      return false;
    }
  }

  setType(type: string) {
    this.type = type;
  }

  getType() {
    return this.type;
  }

  getMinimumHeight() {
    return window.innerHeight - 188 + 'px';
  }

  constructor() { }
}