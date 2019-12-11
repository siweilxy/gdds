import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ApInfo }         from '../apinfo';
import { ApInfoService }  from '../ap-info.service';

@Component({
  selector: 'app-info-detail',
  templateUrl: './apinfo-detail.component.html',
  styleUrls: [ './apinfo-detail.component.css' ]
})
export class ApinfoDetailComponent implements OnInit {
  @Input() apinfo: ApInfo;

  constructor(
    private route: ActivatedRoute,
    private apinfoService: ApInfoService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getApinfo();
  }

  getApinfo(): void {
    const id = this.route.snapshot.paramMap.get('ap_id_cd')+"";
    this.apinfoService.getApInfo(id)
      .subscribe(apinfo => this.apinfo = apinfo);
      console.log("apinfo is "+this.apinfo.ap_id_cd +" id is "+ id)
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.apinfoService.updateApinfo(this.apinfo)
      .subscribe(() => this.goBack());
  }
}