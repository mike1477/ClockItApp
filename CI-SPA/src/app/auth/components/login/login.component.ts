import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ProgressBarService } from 'src/app/shared/services/progress-bar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, public progressBar: ProgressBarService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.progressBar.startLoading();
    const loginObserver = {
      next: x => {
        console.log('User logged in');
        this.progressBar.completeLoading();
        this.progressBar.setSuccess();
      },
      error: err => {
        this.progressBar.setError();
        console.log(err);
        this.progressBar.completeLoading();
      }
    };
    this.authService.login(f.value).subscribe(loginObserver);

  }

}
