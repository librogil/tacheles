import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs'; 
import { APIService } from 'src/app/api.service';
import { Term } from 'src/app/models/term.model';

@Injectable({
  providedIn: 'root'
})

export class TermResolverService implements Resolve<Term> {

  termID: string;
  
  constructor(private apiService: APIService) { }

  resolve(route: ActivatedRouteSnapshot): 
  Observable<any> | Promise<any> | Term {
    this.termID = route.paramMap.get('termID');
    return this.apiService.getSelectedTerm(this.termID);
  }
}