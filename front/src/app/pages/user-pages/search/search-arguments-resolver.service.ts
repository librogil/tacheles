import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs'; 
import { Argument } from 'src/app/models/argument.model';
import { APIService } from 'src/app/api.service';

@Injectable({
  providedIn: 'root'
})

export class SearchArgumentsResolverService {

  searchTerm: string;

  constructor(private apiService: APIService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
  Observable<any> | Promise<any> | Argument[] {
    this.searchTerm = route.paramMap.get('searchTerm');
    return this.apiService.getSearchResults(this.searchTerm);
  }
}