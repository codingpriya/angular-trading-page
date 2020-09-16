import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TradeModule } from './views/trade/trade.module';
import { AppSharedModule } from './shared/app-shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { TradeService } from './shared/services/trade.service';
import { HttpClientModule } from '@angular/common/http';
import { NotificationService } from './shared/services/notification-service';
import { SnotifyService, ToastDefaults } from 'ng-snotify';
import { HttpInterceptorProviders } from './shared/http-interceptors/http-interceptor-providers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TradeModule,
    AppSharedModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    TradeService,
    NotificationService,
    SnotifyService,
    {
      provide: 'SnotifyToastConfig',
      useValue: ToastDefaults
    },
    HttpInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
