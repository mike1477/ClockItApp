import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/shared/services/auth.service";
import { ProgressBarService } from "src/app/shared/services/progress-bar.service";
import { AlertService } from "ngx-alerts";
import { EmployerService } from "src/app/shared/services/employer.service";

@Component({
  selector: "app-employer-edit",
  templateUrl: "./employer-edit.component.html",
  styleUrls: ["./employer-edit.component.scss"]
})
export class EmployerEditComponent implements OnInit {
  model: any = {};

  constructor(
    private authService: AuthService,
    public progressBar: ProgressBarService,
    private alertService: AlertService,
    private employerService: EmployerService
  ) {}

  ngOnInit() {}

  onFileChange(e) {
    this.model.file = e.target.files[0];
  }

  onSubmit() {
    this.alertService.info("Updating Account");
    this.progressBar.startLoading();
    const updateEmployerObserver = {
      next: x => {
        this.progressBar.setSuccess();
        console.log("Account Updated");
        this.alertService.success("Account Updated");
        this.progressBar.completeLoading();
      },
      error: err => {
        this.progressBar.setError();
        console.log(err);
        this.alertService.danger("Unable to Update Account");
        this.progressBar.completeLoading();
      }
    };
    this.employerService
      .updateEmployer(this.model)
      .subscribe(updateEmployerObserver);
  }
}
