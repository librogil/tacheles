import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { A } from './models/a.model';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private webReqService: WebRequestService) { }

  // GET >>>

  getArguments() {
    return this.webReqService.get('arguments');
  }

  getFalseArguments() {
    return this.webReqService.get('false-arguments');
  }

  getTrueArguments() {
    return this.webReqService.get('true-arguments');
  }

  getIrrefutableArguments() {
    return this.webReqService.get('irrefutable-arguments');
  }

  getSelectedArgument(thingID: string) {
    return this.webReqService.get(`arguments/${thingID}`);
  }

  getTerms() {
    return this.webReqService.get('dictionary');
  }

  getSelectedPending(tempID: string) {
    return this.webReqService.get(`editors/pending/${tempID}`);
  }

  getSelectedApproved(tempID: string) {
    return this.webReqService.get(`editors/approved/${tempID}`);
  }
  
  getSelectedArgumentxxx(argumentID: string) {
    return this.webReqService.get(`new/${argumentID}`);
  }

  getAllArguments() {
    return this.webReqService.get('editors');
  }

  getSelectedAnswer(argumentID: string ,answerID: string) {
    return this.webReqService.get(`arguments/${argumentID}/${answerID}`);
  }

  getSelectedTerm(termID: string) {
    return this.webReqService.get(`dictionary/${termID}`);
  }
  
  getAnswerForEditing(argumentID: string ,answerID: string) {
    return this.webReqService.get(`edit/${argumentID}/${answerID}`);
  }

  getSearchResults(searchTerm: string) {
    return this.webReqService.get(`search/${searchTerm}`);
  }

  // GET <<<

  // SUBMIT >>>

  // SUBMIT <<<

  submitNewArgument(title: string, answer: {short: string, full: string}, email: string) {
    return this.webReqService.post('new', { title, answer, email });
  }

  submitNewAnswer(argumentID: String, title: string, answer: {short: string, full: string}, 
    email: string) {
    return this.webReqService.post(`new/${argumentID}`, { argumentID, title, answer, email });
  }

  submitEditedAnswer(argumentID: String, answerID: string, title: string, 
    answer: {short: string, full: string}, email: string) {
    return this.webReqService.post(`edit/${argumentID}/${answerID}`, { argumentID, answerID,title, answer, email });
  }

  // APPROVE >>>

  approveNewArgument(argumentID: String, title: string, answers: {short: string, full: string, tags: string[], rank: number}, 
    tags: string[]) {
    return this.webReqService.post(`editors/pending/${argumentID}`, { title, answers, tags });
  }
  
  approveNewAnswer(tempID: String, title: string, answers: {short: string, full: string, tags: string[], rank: number}, argID: string ) {
    return this.webReqService.patch(`new-answer/${tempID}`, { answers, argID });
  }

  approveEditedAnswer(tempID: String, answerID: string, editedAnswer: {short: string, full: string, tags: string[], rank: number}, answers: A[], argID: string ) {
    return this.webReqService.patch(`editors/pending/${tempID}`, { answers, argID, answerID, editedAnswer });
  }

  // APPROVE <<<

  // STRAIGHT BY EDITORS >>>

  straightNewArgument(title: string, answers: {short: string, full: string, tags: string[], rank: number}, 
    tags: string[]) {
    return this.webReqService.post('editors/new', { title, answers, tags });
  }

  // STRAIGHT BY EDITORS <<<

}
