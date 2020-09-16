import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullscreenComponent } from './fullscreen/fullscreen.component';
import { FullscreenModule } from './fullscreen/fullscreen.module';
import { SharedMaterialModule } from 'src/app/shared/shared-material.module';

@NgModule({
    declarations: [
        FullscreenComponent
    ],
    imports: [
        CommonModule,
        FullscreenModule,
        SharedMaterialModule
    ],
    exports: [
        FullscreenModule
    ],
    providers: [],
    entryComponents: []
})
export class TradeModule { }