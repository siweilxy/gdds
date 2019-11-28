import { Component, OnInit } from '@angular/core';
import { ApInfo } from '../apinfo';
import { ApInfoService } from '../ap-info.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  apinfos: ApInfo[] = [];

  // constructor(private apinfoService: ApInfoService) { }
  constructor() { }

  ngOnInit() {
    // this.getApInfos();
  }

  // getApInfos(): void {
  //   this.apinfoService.getApInfos()
  //     .subscribe(apinfos => this.apinfos = apinfos.slice(1, 5));
  // }
}
