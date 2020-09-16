import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TradeService } from 'src/app/shared/services/trade.service';

@Component({
  selector: 'app-trade-history',
  templateUrl: './trade-history.component.html',
  styleUrls: []
})
export class TradeHistoryComponent implements OnInit {

  tradeHistories: any;

  constructor(private tradeService: TradeService) { }

  ngOnInit() {
    this.tradeHistories = this.tradeService.getTradeHistory();
    // console.log(this.tradeHistories);
  }
  
  tradeHistory: any[] = [
    { price: 10033.6300, amount: 0.1539, date: 16-17-42},
    { price: 10033.6300, amount: 0.1539, date: 16-17-42},
    { price: 10033.6300, amount: 0.1539, date: 16-17-42},
    { price: 10033.6300, amount: 0.1539, date: 16-17-42},
  ];

}