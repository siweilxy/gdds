import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Pubcfg }         from '../pubcfg';
import { CltPubCfgService }  from '../clt-pub-cfg.service';

@Component({
  selector: 'pubcfg-detail',
  templateUrl: './pubcfg-detail.component.html',
  styleUrls: [ './pubcfg-detail.component.css' ]
})
export class PubcfgDetailComponent implements OnInit {
  @Input() pubcfg: Pubcfg;

  constructor(
    private route: ActivatedRoute,
    private cltPubCfgService: CltPubCfgService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPubInfo();
  }

  getPubInfo(): void {
    const id = this.route.snapshot.paramMap.get('id')+"";
    this.cltPubCfgService.getPubCfg(id)
      .subscribe(pubcfg => this.pubcfg = pubcfg);
  }

  goBack(): void {
    this.location.back();
  }

  // save(): void {
  //   this.cltPubCfgService(this.pubcfg)
  //     .subscribe(() => this.goBack());
  // }
}