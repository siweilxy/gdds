import { Component, OnInit } from '@angular/core';
import { Pubinfo } from '../pubinfo';
import { PubInfoService } from '../pub-info.service';

@Component({
  selector: 'app-tbl-gldds-pub-info',
  templateUrl: './tbl-gldds-data-pub-info.component.html',
  styleUrls: ['./tbl-gldds-data-pub-info.component.css']
})
export class TblGlddsDataPubInfoComponent implements OnInit {
  pubinfos:Pubinfo[];

  constructor(private pubinfosService:PubInfoService) { }

  ngOnInit() {
    this.getPubInfos();
  }

  getPubInfos():void{
    this.pubinfosService.getPubInfos().subscribe(pubinfos=>this.pubinfos=pubinfos);
  }

}
