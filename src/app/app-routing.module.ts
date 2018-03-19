import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BaseReportComponent} from "./reports/base-report/base-report.component";
import {AllreportsComponent} from "./reports/allreports/allreports.component";
import {NewReportComponent} from "./reports/new-report/new-report.component";
import {PublicReportComponent} from "./reports/public-report/public-report.component";
import {UpdateReportComponent} from "./reports/update-report/update-report.component";
import {RolesComponent} from "./roles/roles.component";
import {UsersComponent} from "./users/users.component";
import {UpdateUserComponent} from "./users/update-user/update-user.component";
import {UpdateRoleComponent} from "./roles/update-role/update-role.component";

const appRoutes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'report', component: BaseReportComponent},
    {path: 'allreports', component: AllreportsComponent},
    {path: 'new_report', component: NewReportComponent},
    {path: 'public_report', component: PublicReportComponent},
    {path: 'update_report', component: UpdateReportComponent},
    {path: 'roles', component: RolesComponent},
    {path: 'roles/update/:id', component: UpdateRoleComponent},
    {path: 'users', component: UsersComponent},
    {path: 'users/update/:id', component: UpdateUserComponent},
    {path: '**', redirectTo: ''}

]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}