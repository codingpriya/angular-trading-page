import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { API } from '../contants/configuration-constants';

@Injectable()
export class TradeService {

    constructor(private dataService: DataService) { }

    getTradeHistory() {
        return this.dataService.getRequest(API.GET_TRADE_HISTORY).then((res: any) => res);
    }

    // getAlbumLists(){
    //     return this.dataService.getRequest(API.GET_MOVIE_ALBUM).then((res:any) => res);
    // }

}