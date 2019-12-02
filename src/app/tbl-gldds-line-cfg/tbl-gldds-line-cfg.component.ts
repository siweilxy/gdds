import { Component, OnInit } from '@angular/core';
import { Linecfg } from '../linecfg';
import { LineCfgService } from '../line-cfg.service';

@Component({
  selector: 'app-tbl-gldds-line-cfg',
  templateUrl: './tbl-gldds-line-cfg.component.html',
  styleUrls: ['./tbl-gldds-line-cfg.component.css']
})
export class TblGlddsLineCfgComponent implements OnInit {
  linecfgs:Linecfg[];

  constructor(private linecfgsService:LineCfgService) { }

  ngOnInit() {
    this.getLineCfgs();
  }

  getLineCfgs():void{
    this.linecfgsService.getLineCfgs().subscribe(linecfgs=>this.linecfgs=linecfgs);
  }

}
