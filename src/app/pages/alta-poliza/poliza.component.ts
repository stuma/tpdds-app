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
  condicionIvaDataSource: any = {};
  medidasSeguridadDataSource: any = {};
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
  buttonOptions: any;
  //
  agregarHijosVisible: boolean;
  verHijosVisible: boolean;
  //
  tabPanelOptions: any;
  checkBoxValue: any;
  gridHeight: any;
  tabSelectionChanged: any;
  baseUrl: any;

  constructor(private polizaService: PolizaService) {
    // @ts-ignore
    // this.polizaService = polizaService;
    this.provinciaDataSource = [];
    this.localidadDataSource = [];
    this.hijosDataSource = [];
    this.marcaDataSource = [];
    this.modeloDataSource = [];
    this.tipoDocDataSource = []; //
    this.tipoCoberturaDataSource = [];
    this.medidasSeguridadDataSource = []; //
    this.formaPagoDataSource = []; //
    this.sexoDataSource = []; //
    this.estadoCivilDataSource = []; //
    this.condicionIvaDataSource = []; //
    this.tabPanelOptions = {selectedIndex: 0, activeStateEnabled: true, onSelectionChanged: this.tabSelectionChanged};
    this.baseUrl = environment.baseUrl;

    this.poliza = this.polizaService.getPoliza();
    this.cliente = this.polizaService.getCliente();
    this.hijo = this.polizaService.getHijo();
    this.buscarCliente = this.buscarCliente.bind(this);

    this.polizaService.getTipoDni().then((response) => {
      this.tipoDocDataSource = new ArrayStore({
        key: 'id',
        data: response
      });
    }).catch(error => {
      console.log(error);
    });

    this.polizaService.getMedidasSeguridad().then((response) => {
      this.medidasSeguridadDataSource = new ArrayStore({
        key: 'id',
        data: response
      });
    }).catch(error => {
      console.log(error);
    });

    this.polizaService.getFormasPago().then((response) => {
      this.formaPagoDataSource = new ArrayStore({
        key: 'id',
        data: response
      });
    }).catch(error => {
      console.log(error);
    });

    this.polizaService.getSexos().then((response) => {
      this.sexoDataSource = new ArrayStore({
        key: 'id',
        data: response
      });
    }).catch(error => {
      console.log(error);
    });

    this.polizaService.getEstadoCivil().then((response) => {
      this.estadoCivilDataSource = new ArrayStore({
        key: 'id',
        data: response
      });
    }).catch(error => {
      console.log(error);
    });

    this.polizaService.getCondicionesIva().then((response) => {
      this.condicionIvaDataSource = new ArrayStore({
        key: 'id',
        data: response.items
      });
    }).catch(error => {
      console.log(error);
    });

    this.polizaService.getLocalidades().then((response) => {
      this.localidadDataSource = new ArrayStore({
        key: 'id',
        data: response
      });
    }).catch(error => {
      console.log(error);
    });

    this.polizaService.getProvincias().then((response) => {
      this.provinciaDataSource = new ArrayStore({
        key: 'id',
        data: response
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

  verHijo() {
    this.verHijosVisible = true;
  }

  buscarCliente() {
    this.polizaService.getClienteById(15).then((response) => {
      this.poliza.cliente = response;
    }).catch(error => {
      console.log(error);
    });
  }

}
