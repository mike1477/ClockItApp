import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = "http://localhost:5000/api/auth/";
  employersUrl = "http://localhost:5000/api/employers/";
  confirmEmailUrl = "http://localhost:4200/confirm-email/";
  changePasswordUrl = "http://localhost:4200/change-password/";
  helper = new JwtHelperService();
  decodedToken: any;

  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post(this.authUrl + 'login', model).pipe(
      map((response: any) => {
        const user = response;
        if (user.result.succeeded) {
          localStorage.setItem('token', user.token);
          this.decodedToken = this.helper.decodeToken(user.token);
        }
      })
    )
  }

  register(model: any) {
    let headers = new HttpHeaders({
      'confirmEmailUrl': this.confirmEmailUrl
    });
    let options = { headers: headers };
    return this.http.post(this.employersUrl + 'create', model, options);
  }

  resetPassword(model: any) {
    let headers = new HttpHeaders({
      'changePasswordUrl': this.changePasswordUrl
    });
    let options = { headers: headers };
    return this.http.post(this.authUrl + 'resetpassword', model, options);
  }

  confirmEmail(model: any) {
    return this.http.post(this.authUrl + 'confirmemail', model);
  }

  changePassword(model: any) {
    return this.http.post(this.authUrl + 'changepassword', model);
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.helper.isTokenExpired(token);
  }


}
