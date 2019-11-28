import { Component, OnInit } from '@angular/core';
import { Pubcfg } from '../pubcfg';
import { CltPubCfgService } from '../clt-pub-cfg.service';

@Component({
  selector: 'app-tbl-gldds-cltpub-cfg',
  templateUrl: './tbl-gldds-cltpub-cfg.component.html',
  styleUrls: ['./tbl-gldds-cltpub-cfg.component.css']
})
export class TblGlddsCltpubCfgComponent implements OnInit {
  pubcfgs:Pubcfg[];

  constructor(private pubcfgsService:CltPubCfgService) { }

  ngOnInit() {
    this.getPubCfgs();
  }

  getPubCfgs():void{
    this.pubcfgsService.getPubCfgs().subscribe(pubcfgs=>this.pubcfgs=pubcfgs);
  }

}
