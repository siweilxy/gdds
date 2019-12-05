import { Component, OnInit } from '@angular/core';
import {ApInfo} from '../apinfo';
//import {APINfOS} from '../mock-apinfo'
import {ApInfoService} from '../ap-info.service';
@Component({
  selector: 'app-tbl-gldds-ap-info',
  templateUrl: './tbl-gldds-ap-info.component.html',
  styleUrls: ['./tbl-gldds-ap-info.component.css']
})
export class TblGlddsApInfoComponent implements OnInit {
  //selectedApInfo: ApInfo;
  apinfos : ApInfo[];

  constructor(private apInfoService: ApInfoService) { }

  ngOnInit() {
    this.getApInfos();
  }

  // onSelect(apinfo: ApInfo): void {
  //   this.apinfos = apinfo;
  // }

  getApInfos(): void {
    this.apInfoService.getApInfos()
        .subscribe(apinfos => this.apinfos = apinfos);
  }

  add(name: ApInfo): void {
    //name = name.trim();
    if (!name) { return; }
    this.apInfoService.addApinfo( name as ApInfo)
      .subscribe(apinfo => {
        this.apinfos.push(apinfo);
      });
  }
 
  delete(apinfo: ApInfo): void {
    this.apinfos = this.apinfos.filter(h => h !== apinfo);
    this.apInfoService.deleteApinfo(apinfo).subscribe();
  }

}
