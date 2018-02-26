import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BaseReportComponent} from "./reports/base-report/base-report.component";

const appRoutes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'report', component: BaseReportComponent},
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