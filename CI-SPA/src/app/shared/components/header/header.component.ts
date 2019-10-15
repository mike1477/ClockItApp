import { Component, OnInit } from '@angular/core';
import { NgProgress } from '@ngx-progressbar/core';
import { ProgressBarService } from '../../services/progress-bar.service';
import { AuthService } from '../../services/auth.service';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private progress: NgProgress, public progressBar: ProgressBarService,
    public authService: AuthService, private alertService: AlertService) { }

  ngOnInit() {
    this.progressBar.progressRef = this.progress.ref('progressBar');
  }

  logout() {
    localStorage.removeItem('token');
    this.alertService.success("Logged Out");
  }

}
