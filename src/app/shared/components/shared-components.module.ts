import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedMaterialModule } from '../shared-material.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TradeTableComponent } from 'src/app/views/trade/fullscreen/components/shared/trade-table/trade-table.component';
import { SnackComponent } from './snack/snack.component';


const components = [
    TradeTableComponent,
    SnackComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedMaterialModule,
  ],

  declarations: components,

  entryComponents: [
    SnackComponent
  ],

  exports: components,
})
export class SharedComponentsModule { }