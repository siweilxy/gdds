import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { TblGlddsApInfoComponent }      from './tbl-gldds-ap-info/tbl-gldds-ap-info.component';
import { ApinfoDetailComponent }  from './apinfo-detail/apinfo-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: ApinfoDetailComponent },
  { path: 'apinfos', component: TblGlddsApInfoComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}