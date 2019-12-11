import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RelationPubsService } from '../relation-pubs.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-relation-pubs',
  templateUrl: './relation-pubs.component.html',
  styleUrls: ['./relation-pubs.component.css']
})
export class RelationPubsComponent implements OnInit {

  @Input() pubs: string[];

  constructor(
    private route: ActivatedRoute,
    private relationPubsService: RelationPubsService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPubs();
    
  }

  getPubs(): void {

    const ap_id_cd = this.route.snapshot.paramMap.get('ap_id_cd')+"";
    this.relationPubsService.getPubs(ap_id_cd)
      .subscribe(ap_id_cd => this.pubs = ap_id_cd);
  }

  goBack(): void {
    this.location.back();
  }

}
