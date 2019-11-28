import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { TblGlddsApInfoComponent }      from './tbl-gldds-ap-info/tbl-gldds-ap-info.component';
import { ApinfoDetailComponent }  from './apinfo-detail/apinfo-detail.component';
import {TblGlddsCltpubCfgComponent} from './tbl-gldds-cltpub-cfg/tbl-gldds-cltpub-cfg.component'
import { TblGlddsCltsubCfgComponent } from './tbl-gldds-cltsub-cfg/tbl-gldds-cltsub-cfg.component';
import { TblGlddsDataPubInfoComponent } from './tbl-gldds-data-pub-info/tbl-gldds-data-pub-info.component';
import { TblGlddsDataSubInfoComponent } from './tbl-gldds-data-sub-info/tbl-gldds-data-sub-info.component';
import { TblGlddsLineCfgComponent } from './tbl-gldds-line-cfg/tbl-gldds-line-cfg.component';
import { TblGlddsPubTsComponent } from './tbl-gldds-pub-ts/tbl-gldds-pub-ts.component';
import { TblGlddsSubTsComponent } from './tbl-gldds-sub-ts/tbl-gldds-sub-ts.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/apinfo/:id', component: ApinfoDetailComponent },
  { path: 'apinfos', component: TblGlddsApInfoComponent },
  { path: 'pubcfgs',component:TblGlddsCltpubCfgComponent},
  { path: 'subcfgs',component:TblGlddsCltsubCfgComponent},
  { path: 'pubinfos',component:TblGlddsDataPubInfoComponent},
  { path: 'subinfos',component:TblGlddsDataSubInfoComponent},
  { path: 'linecfgs',component:TblGlddsLineCfgComponent},
  { path: 'pubts',component:TblGlddsPubTsComponent},
  { path: 'subts',component:TblGlddsSubTsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}