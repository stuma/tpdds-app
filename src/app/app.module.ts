import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule, LoginFormModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { AppRoutingModule } from './app-routing.module';
import {PolizaComponent} from './pages/alta-poliza/poliza.component';
import {DisplayDataComponent} from './pages/display-data/display-data.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {HomeComponent} from './pages/home/home.component';
import {
  DxButtonModule,
  DxCheckBoxModule,
  DxDataGridModule,
  DxDateBoxModule,
  DxFormModule,
  DxTabPanelModule,
  DxTabsModule
} from 'devextreme-angular';


@NgModule({
  declarations: [
    AppComponent,
    PolizaComponent,
    DisplayDataComponent,
    ProfileComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    LoginFormModule,
    AppRoutingModule,
    DxDataGridModule,
    DxFormModule,
    DxCheckBoxModule,
    DxButtonModule,
    DxTabsModule,
    DxTabPanelModule,
    DxDateBoxModule
  ],
  providers: [AuthService, ScreenService, AppInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
