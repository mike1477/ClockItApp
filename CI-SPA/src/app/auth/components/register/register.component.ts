import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ProgressBarService } from 'src/app/shared/services/progress-bar.service';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, public progressBar: ProgressBarService,
    private alertService: AlertService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.alertService.info('Working on creating new account');
    this.progressBar.startLoading();
    const registerObserver = {
      next: x => {
        this.progressBar.setSuccess();
        console.log('User created');
        this.alertService.success('Account Created');
        this.progressBar.completeLoading();
      },
      error: err => {
        this.progressBar.setError();
        console.log(err);
        this.alertService.danger(err.error.errors[0].description);
        this.progressBar.completeLoading();
      }
    };
    this.authService.register(f.value).subscribe(registerObserver);
  }

}
