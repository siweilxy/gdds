import { Component, OnInit } from '@angular/core';
import { Pubts } from '../pubts';
import { PubTsService } from '../pub-ts.service';

@Component({
  selector: 'app-tbl-gldds-pub-ts',
  templateUrl: './tbl-gldds-pub-ts.component.html',
  styleUrls: ['./tbl-gldds-pub-ts.component.css']
})
export class TblGlddsPubTsComponent implements OnInit {
  pubtses:Pubts[];

  constructor(private pubtsService:PubTsService) { }

  ngOnInit() {
    console.log("ngOnInit");
    this.getPubtses();
  }

  getPubtses():void{
    console.log("getPubTses");
    this.pubtsService.getPubtses().subscribe(pubtses=>this.pubtses=pubtses);
  }

}
