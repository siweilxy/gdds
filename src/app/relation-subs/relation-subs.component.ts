import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RelationSubsService } from '../relation-subs.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-relation-subs',
  templateUrl: './relation-subs.component.html',
  styleUrls: ['./relation-subs.component.css']
})
export class RelationSubsComponent implements OnInit {

  @Input() subs: string[];

  constructor(
    private route: ActivatedRoute,
    private relationSubsService: RelationSubsService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getSubs();
    
  }

  getSubs(): void {

    const ap_id_cd = this.route.snapshot.paramMap.get('ap_id_cd')+"";
    this.relationSubsService.getSubs(ap_id_cd)
      .subscribe(ap_id_cd => this.subs = ap_id_cd);
  }

  goBack(): void {
    this.location.back();
  }

}
