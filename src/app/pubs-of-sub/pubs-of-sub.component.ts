import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PubsOfSubService } from '../pubs-of-sub.service';

@Component({
  selector: 'app-pubs-of-sub',
  templateUrl: './pubs-of-sub.component.html',
  styleUrls: ['./pubs-of-sub.component.css']
})
export class PubsOfSubComponent implements OnInit {

  @Input() pubs: string[];

  constructor(
    private route: ActivatedRoute,
    private pubsOfSubService: PubsOfSubService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getsubs();
    
  }

  getsubs(): void {

    const sub = this.route.snapshot.paramMap.get('sub')+"";
    this.pubsOfSubService.getPubs(sub)
      .subscribe(sub => this.pubs = sub);
  }

  goBack(): void {
    this.location.back();
  }

}
