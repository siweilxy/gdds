import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SubsOfPubService } from '../subs-of-pub.service';

@Component({
  selector: 'app-subs-of-pub',
  templateUrl: './subs-of-pub.component.html',
  styleUrls: ['./subs-of-pub.component.css']
})
export class SubsOfPubComponent implements OnInit {

  @Input() subs: string[];

  constructor(
    private route: ActivatedRoute,
    private subsOfPubService: SubsOfPubService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getsubs();
    
  }

  getsubs(): void {

    const pub = this.route.snapshot.paramMap.get('pub')+"";
    this.subsOfPubService.getSubs(pub)
      .subscribe(pub => this.subs = pub);
  }

  goBack(): void {
    this.location.back();
  }

}
