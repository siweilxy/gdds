import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { TblGlddsApInfoComponent } from './tbl-gldds-ap-info/tbl-gldds-ap-info.component';
import { ApinfoDetailComponent } from './apinfo-detail/apinfo-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApinfoSearchComponent } from './apinfo-search/apinfo-search.component';
import { TblGlddsCltpubCfgComponent } from './tbl-gldds-cltpub-cfg/tbl-gldds-cltpub-cfg.component';
import { TblGlddsCltsubCfgComponent } from './tbl-gldds-cltsub-cfg/tbl-gldds-cltsub-cfg.component';
import { TblGlddsDataPubInfoComponent } from './tbl-gldds-data-pub-info/tbl-gldds-data-pub-info.component';
import { TblGlddsDataSubInfoComponent } from './tbl-gldds-data-sub-info/tbl-gldds-data-sub-info.component';
import { TblGlddsLineCfgComponent } from './tbl-gldds-line-cfg/tbl-gldds-line-cfg.component';
import { TblGlddsPubTsComponent } from './tbl-gldds-pub-ts/tbl-gldds-pub-ts.component';
import { TblGlddsSubTsComponent } from './tbl-gldds-sub-ts/tbl-gldds-sub-ts.component';

@NgModule({
  declarations: [
    AppComponent,
    TblGlddsApInfoComponent,
    ApinfoDetailComponent,
    MessagesComponent,
    DashboardComponent,
    ApinfoSearchComponent,
    TblGlddsCltpubCfgComponent,
    TblGlddsCltsubCfgComponent,
    TblGlddsDataPubInfoComponent,
    TblGlddsDataSubInfoComponent,
    TblGlddsLineCfgComponent,
    TblGlddsPubTsComponent,
    TblGlddsSubTsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.

HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
),

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
