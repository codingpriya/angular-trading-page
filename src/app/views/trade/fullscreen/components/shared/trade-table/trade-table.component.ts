import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-trade-table',
  templateUrl: './trade-table.component.html',
  styleUrls: []
})
export class TradeTableComponent implements OnInit {

  @Input('trades') trades;
  
  constructor(){}

  ngOnInit() {
    //console.log(this.child);
    
  }

}