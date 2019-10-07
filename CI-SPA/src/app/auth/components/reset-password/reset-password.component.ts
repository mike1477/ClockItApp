import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    const resetPasswordObserver = {
      next: x => console.log('Check email to change password'),
      error: err => console.log(err)
    };
    this.authService.resetPassword(f.value).subscribe(resetPasswordObserver);
  }

}
