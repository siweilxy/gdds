import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Pubts }         from '../pubts';
import { PubTsService }  from '../pub-ts.service';

@Component({
  selector: 'pubts-detail',
  templateUrl: './pubts-detail.component.html',
  styleUrls: [ './pubts-detail.component.css' ]
})
export class PubtsDetailComponent implements OnInit {
  @Input() pubts: Pubts;

  constructor(
    private route: ActivatedRoute,
    private pubtsService: PubTsService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPubts();
  }

  getPubts(): void {
    const id = this.route.snapshot.paramMap.get('data_index')+"";
    this.pubtsService.getPubts(id)
      .subscribe(pubts => this.pubts = pubts);
  }

  goBack(): void {
    this.location.back();
  }

  // save(): void {
  //   this.cltPubCfgService(this.pubcfg)
  //     .subscribe(() => this.goBack());
  // }
}