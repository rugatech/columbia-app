import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BaseReportComponent} from "./reports/base-report/base-report.component";
import {AllreportsComponent} from "./reports/allreports/allreports.component";

const appRoutes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'report', component: BaseReportComponent},
    {path: 'allreports', component: AllreportsComponent},
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