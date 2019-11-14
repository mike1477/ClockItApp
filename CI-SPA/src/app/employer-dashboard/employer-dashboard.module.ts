import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EmployerDashboardRoutingModule } from "./employer-dashboard-routing.module";
import { EmployerEditComponent } from "./components/employer-edit/employer-edit.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [EmployerEditComponent],
  imports: [CommonModule, EmployerDashboardRoutingModule, FormsModule],
  exports: [EmployerEditComponent]
})
export class EmployerDashboardModule {}
