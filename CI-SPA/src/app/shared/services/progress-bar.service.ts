import { Injectable } from '@angular/core';
import { NgProgressRef } from '@ngx-progressbar/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {

  progressRef: NgProgressRef;
  default: string = "#2A9FD6";
  success: string = "#77B300";
  error: string = "#CC0000";
  currentColor: string = this.default;

  constructor() { }

  startLoading() {
    this.currentColor = this.default;
    this.progressRef.start();
  }

  completeLoading() {
    this.progressRef.complete();
  }

  incLoading(n: number) {
    this.progressRef.inc(n);
  }

  setLoading(n: number) {
    this.progressRef.set(n);
  }

  setSuccess() {
    this.currentColor = this.success;
  }

  setError() {
    this.currentColor = this.error;
  }
}
