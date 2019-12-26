import { NgModule } from 'node_modules/@angular/core';
import { CommonModule } from 'node_modules/@angular/common';
import { RouterModule, Routes } from 'node_modules/@angular/router';
import { HttpClientModule } from 'node_modules/@angular/common/http';
import { DxDataGridModule, DxButtonModule, DxFormModule, DxPopupModule, DxSelectBoxModule } from 'node_modules/devextreme-angular';
import {PolizaComponent} from './poliza.component';

const routes: Routes = [{
  path: '',
  component: PolizaComponent,
  canActivate: [],
  data: { modulo: 'alta-poliza' }
}];

@NgModule({
  declarations: [
    PolizaComponent
  ],
  imports: [
    CommonModule,
    DxDataGridModule,
    DxButtonModule,
    DxFormModule,
    DxPopupModule,
    DxSelectBoxModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class PolizaModule { }
