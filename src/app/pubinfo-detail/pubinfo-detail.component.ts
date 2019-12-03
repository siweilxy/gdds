import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Pubinfo }         from '../pubinfo';
import { PubInfoService }  from '../pub-info.service';

@Component({
  selector: 'pubinfo-detail',
  templateUrl: './pubinfo-detail.component.html',
  styleUrls: [ './pubinfo-detail.component.css' ]
})
export class PubInfoDetailComponent implements OnInit {
  @Input() pubInfo: Pubinfo;

  constructor(
    private route: ActivatedRoute,
    private cltPubInfoService: PubInfoService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPubInfo();
  }

  getPubInfo(): void {
    const id = this.route.snapshot.paramMap.get('id')+"";
    this.cltPubInfoService.getPubInfo(id)
      .subscribe(pubInfo => this.pubInfo = pubInfo);
  }

  goBack(): void {
    this.location.back();
  }

  // save(): void {
  //   this.cltPubCfgService(this.pubcfg)
  //     .subscribe(() => this.goBack());
  // }
}