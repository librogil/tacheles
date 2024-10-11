import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs'; 
import { Argument } from 'src/app/models/argument.model';
import { APIService } from 'src/app/api.service';

@Injectable({
  providedIn: 'root'
})

export class ArgumentsResolverService {

  constructor(private apiService: APIService) { }

  resolve(): 
  Observable<any> | Promise<any> | Argument {
    return this.apiService.getArguments();
  }
}