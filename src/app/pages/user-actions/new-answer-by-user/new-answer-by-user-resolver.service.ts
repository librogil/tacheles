import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs'; 
import { Argument } from 'src/app/models/argument.model';
import { APIService } from 'src/app/api.service';

@Injectable({
  providedIn: 'root'
})

export class NewAnswerByUserResolverService implements Resolve<Argument> {

  argumentID: string;
  
  constructor(private apiService: APIService) { }

  resolve(route: ActivatedRouteSnapshot): 
  Observable<any> | Promise<any> | Argument {
    this.argumentID = route.paramMap.get('argumentID');
    return this.apiService.getSelectedArgument(this.argumentID);
  }
}
