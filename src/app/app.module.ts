import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {RouterModule,Routes} from '@angular/router'
import { RoutingModuleModule, routingComponents } from './routing-module/routing-module.module';
import { DeptDetailComponent } from './dept-detail/dept-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DeptDetailComponent
  ],
  imports: [
    BrowserModule,
   RoutingModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
