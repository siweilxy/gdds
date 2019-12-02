import { Component, OnInit } from '@angular/core';
import { Subcfg } from '../subcfg';
import { CltSubCfgService } from '../clt-sub-cfg.service';

@Component({
  selector: 'app-tbl-gldds-cltsub-cfg',
  templateUrl: './tbl-gldds-cltsub-cfg.component.html',
  styleUrls: ['./tbl-gldds-cltsub-cfg.component.css']
})
export class TblGlddsCltsubCfgComponent implements OnInit {
  subcfgs:Subcfg[];

  constructor(private subcfgsService:CltSubCfgService) { }

  ngOnInit() {
    this.getSubCfgs();
  }

  getSubCfgs():void{
    this.subcfgsService.getSubCfgs().subscribe(subcfgs=>this.subcfgs=subcfgs);
  }

}
