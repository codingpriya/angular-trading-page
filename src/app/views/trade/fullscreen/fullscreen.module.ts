import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TradeHistoryComponent } from './components/trade-history/trade-history.component';
import { AppSharedModule } from 'src/app/shared/app-shared.module';
import { SellOrdersComponent } from './components/sell-orders/sell-orders.component';

const components = [
    TradeHistoryComponent,
    SellOrdersComponent,
];

@NgModule({
    declarations: [
        components
    ],
    imports: [
        CommonModule,
        AppSharedModule
    ],
    exports: [
        components
    ],
    providers: [],
    entryComponents: []
})
export class FullscreenModule { }