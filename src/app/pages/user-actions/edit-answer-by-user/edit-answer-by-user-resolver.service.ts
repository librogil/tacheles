import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs'; 
import { APIService } from 'src/app/api.service';
import { Argument } from 'src/app/models/argument.model';

@Injectable({
  providedIn: 'root'
})

export class EditAnswerByUserResolverService implements Resolve<Argument> {

  answerID: string;
  argumentID: string;
  
  constructor(private apiService: APIService) { }

  resolve(route: ActivatedRouteSnapshot): 
  Observable<any> | Promise<any> | Argument {
    this.answerID = route.paramMap.get('answerID');
    this.argumentID = route.paramMap.get('argumentID');
    return this.apiService.getAnswerForEditing(this.argumentID, this.answerID);
  }
}