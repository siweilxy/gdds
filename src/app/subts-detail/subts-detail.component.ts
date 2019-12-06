import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Subts }         from '../subts';
import { SubTsService }  from '../sub-ts.service';

@Component({
  selector: 'subts-detail',
  templateUrl: './subts-detail.component.html',
  styleUrls: [ './subts-detail.component.css' ]
})
export class SubtsDetailComponent implements OnInit {
  @Input() subts: Subts;

  constructor(
    private route: ActivatedRoute,
    private SubtsService: SubTsService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getSubts();
  }

  getSubts(): void {
    const id = this.route.snapshot.paramMap.get('task_index')+"";
    const host_id=this.route.snapshot.paramMap.get('host_id')+"";
    this.SubtsService.getSubts(id,host_id)
      .subscribe(subts => this.subts = subts);
  }

  goBack(): void {
    this.location.back();
  }

  // save(): void {
  //   this.cltPubCfgService(this.pubcfg)
  //     .subscribe(() => this.goBack());
  // }
}