import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sell-orders',
  templateUrl: './sell-orders.component.html',
  styleUrls: []
})
export class SellOrdersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sellOrders: any[] = [
    { total: 10, amount: 200.00, price: 0.00000000},
    { total: 20, amount: 400.00, price: 0.00002000},
    { total: 30, amount: 500.00, price: 0.00000200},
    { total: 40, amount: 600.00, price: 0.00020000}
  ];

}