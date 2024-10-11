import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs'; 
import { Term } from 'src/app/models/term.model';
import { APIService } from 'src/app/api.service';

@Injectable({
  providedIn: 'root'
})

export class SearchTermsResolverService {

  searchTerm: string;

  constructor(private apiService: APIService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
  Observable<any> | Promise<any> | Term[] {
    this.searchTerm = route.paramMap.get('searchTerm');
    return this.apiService.getSearchResults(this.searchTerm);
  }
}