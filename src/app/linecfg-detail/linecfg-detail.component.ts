import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Linecfg }         from '../linecfg';
import { LineCfgService }  from '../line-cfg.service';

@Component({
  selector: 'linecfg-detail',
  templateUrl: './linecfg-detail.component.html',
  styleUrls: [ './linecfg-detail.component.css' ]
})
export class LinecfgDetailComponent implements OnInit {
  @Input() linecfg: Linecfg;

  constructor(
    private route: ActivatedRoute,
    private lineCfgService: LineCfgService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getLineCfg();
  }

  getLineCfg(): void {
    const id = this.route.snapshot.paramMap.get('id')+"";
    this.lineCfgService.getLineCfg(id)
      .subscribe(linecfg => this.linecfg = linecfg);
  }

  goBack(): void {
    this.location.back();
  }

  // save(): void {
  //   this.cltPubCfgService(this.pubcfg)
  //     .subscribe(() => this.goBack());
  // }
}