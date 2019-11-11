import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmployerEditComponent } from "./components/employer-edit/employer-edit.component";

const routes: Routes = [
  {
    path: "employer-edit",
    component: EmployerEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployerDashboardRoutingModule {}
