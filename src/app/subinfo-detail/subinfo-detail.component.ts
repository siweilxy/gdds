import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Subinfo }         from '../subinfo';
import { SubInfoService }  from '../sub-info.service';

@Component({
  selector: 'subinfo-detail',
  templateUrl: './subinfo-detail.component.html',
  styleUrls: [ './subinfo-detail.component.css' ]
})
export class SubInfoDetailComponent implements OnInit {
  @Input() subInfo: Subinfo;

  constructor(
    private route: ActivatedRoute,
    private cltSubInfoService: SubInfoService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getSubInfo();
  }

  getSubInfo(): void {
    const id = this.route.snapshot.paramMap.get('id')+"";
    this.cltSubInfoService.getSubInfo(id)
      .subscribe(pubInfo => this.subInfo = pubInfo);
  }

  goBack(): void {
    this.location.back();
  }

  // save(): void {
  //   this.cltPubCfgService(this.pubcfg)
  //     .subscribe(() => this.goBack());
  // }
}