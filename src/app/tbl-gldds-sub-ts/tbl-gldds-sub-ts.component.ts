import { Component, OnInit } from '@angular/core';
import { Subts } from '../subts';
import { SubTsService } from '../sub-ts.service';

@Component({
  selector: 'app-tbl-gldds-sub-ts',
  templateUrl: './tbl-gldds-sub-ts.component.html',
  styleUrls: ['./tbl-gldds-sub-ts.component.css']
})
export class TblGlddsSubTsComponent implements OnInit {
  subtses:Subts[];

  constructor(private subtsService:SubTsService) { }

  ngOnInit() {
    this.getSubtses();
  }

  getSubtses():void{
    this.subtsService.getSubtses().subscribe(subtses=>this.subtses=subtses);
  }

}
