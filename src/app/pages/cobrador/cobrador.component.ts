import { Component, QueryList, ViewChildren, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Poliza, PolizaService, Cliente } from 'src/app/pages/alta-poliza/poliza.service';
import { DxDataGridComponent, DxFormComponent, DxFormModule, DxPopupComponent, DxSelectBoxComponent } from 'devextreme-angular';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import ArrayStore from 'devextreme/data/array_store';
import { DataSourceService, FormaPago } from 'src/app/shared/components/data-sources/data-sources.service';
import { CobradorService } from 'src/app/pages/cobrador/cobrador.service';


@Component({
  selector: 'cobrador',
  templateUrl: './cobrador.component.html',
  styleUrls: ['./cobrador.component.scss'],
  providers: [CobradorService],
  preserveWhitespaces: true
})
export class CobradorComponent implements OnInit {
  // @ts-ignore
  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
  @ViewChildren(DxFormComponent) form: QueryList<DxFormComponent>;
  // @ts-ignore
  @ViewChild(DxSelectBoxComponent) selectBox: DxSelectBoxComponent;
  @ViewChildren(DxPopupComponent) popup: DxPopupComponent;


  dataSourceService: DataSourceService;
  polizaService: PolizaService;
  //
  verModuloCobros: boolean;
  //
  poliza: Poliza;
 
  //
  
  //
  moduloCobrosWidth: number;
  moduloCobrosHeight: number;
  tabPanelOptions: any;
  checkBoxValue: any;
  gridHeight: any;
  tabSelectionChanged: any;
  baseUrl: any;

  constructor(polizaService: PolizaService, dataSourceService: DataSourceService) {
    this.tabPanelOptions = { selectedIndex: 0, activeStateEnabled: true, onSelectionChanged: this.tabSelectionChanged };
    this.baseUrl = environment.baseUrl;

    this.polizaService = polizaService;
    this.dataSourceService = dataSourceService;

    this.verModuloCobros = false;

    
    

  
  }

  ngOnInit() {
    this.moduloCobrosWidth = window.innerWidth;
    this.moduloCobrosHeight = window.innerHeight;
    this.verModuloCobros = false;

    this.poliza = this.polizaService.getPoliza();
  }
  
  abrirModuloCobros(){
    this.verModuloCobros = true;
  }

  cerrarModuloCobros(){

  }
}
