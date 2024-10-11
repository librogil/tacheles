import { Injectable } from '@angular/core';
import { Term } from 'src/app/models/term.model';
import { Observable } from 'rxjs'; 
import { APIService } from 'src/app/api.service';

@Injectable({
  providedIn: 'root'
})

export class DictionaryResolverService {

  constructor(private apiService: APIService) { }

  resolve(): 
  Observable<any> | Promise<any> | Term[] {
    return this.apiService.getTerms();
  }
}