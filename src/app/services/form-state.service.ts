import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormStateService {
  private isSubmitted = signal(false) ;
  setSubmitted(value: boolean) {
    this.isSubmitted.set(value);
  } ;
  
  // set setSubmitted(value: boolean) {
  //   this.isSubmitted.set(value);
  // } ;

  getSubmitted() {
    return this.isSubmitted();
  }

  // get getSubmitted() {
  //   return this.isSubmitted();
  // }
}
