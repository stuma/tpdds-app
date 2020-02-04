import { NgModule } from 'node_modules/@angular/core';
import { CommonModule } from 'node_modules/@angular/common';
import { RouterModule, Routes } from 'node_modules/@angular/router';
import { HttpClientModule } from 'node_modules/@angular/common/http';
import { DxDataGridModule, DxButtonModule, DxFormModule, DxPopupModule, DxSelectBoxModule } from 'node_modules/devextreme-angular';
import {CobradorComponent} from './cobrador.component';

const routes: Routes = [{
  path: '',
  component: CobradorComponent,
  canActivate: [],
  data: { modulo: 'cobros' }
}];

@NgModule({
  declarations: [
    CobradorComponent
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
export class CobradorModule { }
