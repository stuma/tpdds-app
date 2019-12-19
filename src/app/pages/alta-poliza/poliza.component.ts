import {Component, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {Poliza, PolizaService} from 'src/app/pages/alta-poliza/poliza.service';
import {DxDataGridComponent, DxFormComponent, DxFormModule, DxPopupComponent, DxSelectBoxComponent} from 'devextreme-angular';
import {DxTabsModule} from 'devextreme-angular';


@Component({
  selector: 'app-poliza',
  templateUrl: './poliza.component.html',
  styleUrls: ['./poliza.component.scss'],
  providers: [PolizaService],
  preserveWhitespaces: true
})
export class PolizaComponent {
  // @ts-ignore
  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
  @ViewChildren(DxFormComponent) form: QueryList<DxFormComponent>;
  // @ts-ignore
  @ViewChild(DxSelectBoxComponent) dxSelectBox: DxSelectBoxComponent;
  @ViewChildren(DxPopupComponent) verHijos: DxPopupComponent;
  //
  provinciaDataSource: any = {};
  localidadDataSource: any = {};
  marcaDataSource: any = {};
  modeloDataSource: any = {};
  tipoDocDataSource: any = {};
  tipoCoberturaDataSource: any = {};
  formaPagoDataSource: any = {};
  hijosDataSource: any = {};
  sexoDataSource: any = {};
  estadoCivilDataSource: any = {};
  //
  provincia: any;
  localidad: any;
  marca: any;
  modelo: any;
  tipoDocumento: any;
  //
  poliza: Poliza;
  tabPanelOptions: any;
  checkBoxValue: any;
  tipoCobertura: any;
  formaPago: any;
  heightPopup: number;
  popupTitulo: string;
  verHijosVisible: boolean;
  gridHeight: any;
  hijo: any;
  sexo: any;
  estadoCivil: any;
  agregarHijosVisible: boolean;


  constructor() {
  }

  cerrarVerHijos() {
    this.verHijosVisible = false;
  }

  cerrarAgregarHijos() {
    this.agregarHijosVisible = false;
  }

  agregarHijo() {
    this.agregarHijosVisible = true;
  }

  limpiarFiltros() {


  }

  seleccionaItemGrid($event) {

  }

  verHijo() {
    this.verHijosVisible = true;
  }
}
