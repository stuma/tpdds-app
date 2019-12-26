import {Component, QueryList, ViewChildren, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {Poliza, PolizaService, Cliente} from 'src/app/pages/alta-poliza/poliza.service';
import {DxDataGridComponent, DxFormComponent, DxFormModule, DxPopupComponent, DxSelectBoxComponent} from 'devextreme-angular';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import ArrayStore from 'devextreme/data/array_store';


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

  // polizaService = PolizaService;
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
  cliente: Cliente;
  estadoCivil: any;
  hijo: any;
  sexo: any;
  poliza: Poliza;
  tipoCobertura: any;
  formaPago: any;
  //
  agregarHijosVisible: boolean;
  verHijosVisible: boolean;
  //
  tabPanelOptions: any;
  checkBoxValue: any;
  gridHeight: any;
  tabSelectionChanged: any;
  baseUrl: any;
  medidasSeguridadDataSource: any;


  constructor(private polizaService: PolizaService) {
    // @ts-ignore
    // this.polizaService = polizaService;
    this.provinciaDataSource = [];
    this.localidadDataSource = [];
    this.marcaDataSource = [];
    this.modeloDataSource = [];
    this.tipoDocDataSource = [];
    this.tipoCoberturaDataSource = [];
    this.formaPagoDataSource = [];
    this.hijosDataSource = [];
    this.sexoDataSource = [];
    this.estadoCivilDataSource = [];

    this.tabPanelOptions = {selectedIndex: 0, activeStateEnabled: true, onSelectionChanged: this.tabSelectionChanged};
    this.baseUrl = environment.baseUrl;

  }


  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    // @ts-ignore
    this.poliza = this.polizaService.getPoliza();
    // @ts-ignore
    this.cliente = this.polizaService.getCliente();

    // @ts-ignore
    this.polizaService.getEstadoCivil().then((response) => {
      this.estadoCivilDataSource = new ArrayStore({
        key: 'id',
        data: response.items
      });
    }).catch(error => {
      console.log(error);
    });

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

  buscarCliente() {
    // @ts-ignore
    this.cliente = this.polizaService.getClienteById(15);
    console.log(this.cliente);
  }

  medidasSeguridadChanged($event: any) {

  }
}
