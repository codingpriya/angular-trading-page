import { Component, OnInit } from '@angular/core';
import { TradeService } from 'src/app/shared/services/trade.service';

@Component({
  selector: 'app-fullscreen',
  templateUrl: './fullscreen.component.html',
  styleUrls: []
})
export class FullscreenComponent implements OnInit {

  constructor(private _tradeService: TradeService) { }

  ngOnInit() {

    // this._tradeService.getAlbumLists().then(res => {
    //   console.log(res);
    // })
  }

}
