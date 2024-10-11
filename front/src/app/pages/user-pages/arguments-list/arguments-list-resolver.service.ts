import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 
import { Argument } from 'src/app/models/argument.model';
import { APIService } from 'src/app/api.service';
import { WindowDetectorService } from 'src/app/window-detector.service';

@Injectable({
  providedIn: 'root'
})

export class ArgumentsListResolverService {

  type: string;

  constructor(private apiService: APIService, private windowDetector: WindowDetectorService) { }

  resolve(): 
  Observable<any> | Promise<any> | Argument {

    this.type = this.windowDetector.getType();
    if (this.type) {
      switch(this.type) {
        case 'false':
          return this.apiService.getFalseArguments();
        case 'true':
          return this.apiService.getTrueArguments();
        case 'irrefutable':
          return this.apiService.getIrrefutableArguments();
      }
    }
    let url = window.location.href;
    let splits = url.split("/");
    let type = splits[splits.length - 1];
    if (type.includes('false')) {
      return this.apiService.getFalseArguments();
    } 
    if (type.includes('true')){
      return this.apiService.getTrueArguments();
    }
    return this.apiService.getIrrefutableArguments();      
  }
}