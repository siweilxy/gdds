import { Component, OnInit } from '@angular/core';
import { Subinfo } from '../subinfo';
import { SubInfoService } from '../sub-info.service';

@Component({
  selector: 'app-tbl-gldds-sub-info',
  templateUrl: './tbl-gldds-data-sub-info.component.html',
  styleUrls: ['./tbl-gldds-data-sub-info.component.css']
})
export class TblGlddsDataSubInfoComponent implements OnInit {
  subinfos:Subinfo[];

  constructor(private subinfosService:SubInfoService) { }

  ngOnInit() {
    this.getSubInfos();
  }

  getSubInfos():void{
    this.subinfosService.getSubInfos().subscribe(subinfos=>this.subinfos=subinfos);
  }

}
