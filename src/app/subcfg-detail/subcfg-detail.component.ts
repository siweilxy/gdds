import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Subcfg }         from '../subcfg';
import { CltSubCfgService }  from '../clt-sub-cfg.service';

@Component({
  selector: 'subcfg-detail',
  templateUrl: './subcfg-detail.component.html',
  styleUrls: [ './subcfg-detail.component.css' ]
})
export class SubcfgDetailComponent implements OnInit {
  @Input() subcfg: Subcfg;

  constructor(
    private route: ActivatedRoute,
    private cltSubCfgService: CltSubCfgService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getSubInfo();
  }

  getSubInfo(): void {
    const id = this.route.snapshot.paramMap.get('sub_id_cd')+"";
    const ap_sid = this.route.snapshot.paramMap.get('ap_sid')+"";
    const ap_tp = this.route.snapshot.paramMap.get("ap_tp")+"";
    this.cltSubCfgService.getSubCfg(id,ap_sid,ap_tp)
      .subscribe(subcfg => this.subcfg = subcfg);
  }

  goBack(): void {
    this.location.back();
  }

  // save(): void {
  //   this.cltPubCfgService(this.pubcfg)
  //     .subscribe(() => this.goBack());
  // }
}