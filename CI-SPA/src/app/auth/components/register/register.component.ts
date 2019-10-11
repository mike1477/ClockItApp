import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ProgressBarService } from 'src/app/shared/services/progress-bar.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, public progressBar: ProgressBarService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.progressBar.startLoading();
    const registerObserver = {
      next: x => {
        console.log('User created');
        this.progressBar.setSuccess();
        this.progressBar.completeLoading();
      },
      error: err => {
        this.progressBar.setError();
        console.log(err);
        this.progressBar.completeLoading();
      }
    };
    this.authService.register(f.value).subscribe(registerObserver);
  }

}
