import { Component, QueryList, ViewChildren, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Poliza, PolizaService, Cliente } from 'src/app/pages/alta-poliza/poliza.service';
import { DxDataGridComponent, DxFormComponent, DxFormModule, DxPopupComponent, DxSelectBoxComponent } from 'devextreme-angular';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import ArrayStore from 'devextreme/data/array_store';
import { DataSourceService } from 'src/app/shared/components/data-sources/data-sources.service';


@Component({
  selector: 'app-poliza',
  templateUrl: './poliza.component.html',
  styleUrls: ['./poliza.component.scss'],
  providers: [PolizaService],
  preserveWhitespaces: true
})
export class PolizaComponent implements OnInit {
  // @ts-ignore
  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
  @ViewChildren(DxFormComponent) form: QueryList<DxFormComponent>;
  // @ts-ignore
  @ViewChild(DxSelectBoxComponent) selectBox: DxSelectBoxComponent;
  @ViewChildren(DxPopupComponent) verHijos: DxPopupComponent;


  dataSourceService: DataSourceService;
  polizaService: PolizaService;
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
  popupHijosHeight: number;
  popupHijosWidth: number;
  etiquetaPopup: string;
  tabPanelOptions: any;
  checkBoxValue: any;
  gridHeight: any;
  tabSelectionChanged: any;
  baseUrl: any;

  constructor(polizaService: PolizaService, dataSourceService: DataSourceService) {

    this.polizaService = polizaService;
    this.dataSourceService = dataSourceService;

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
    this.tabPanelOptions = { selectedIndex: 0, activeStateEnabled: true, onSelectionChanged: this.tabSelectionChanged };
    this.baseUrl = environment.baseUrl;


    this.buscarCliente = this.buscarCliente.bind(this);
    this.medidasSeguridadChanged = this.medidasSeguridadChanged.bind(this);
    this.verHijo = this.verHijo.bind(this);


  }

  ngOnInit() {

    this.popupHijosHeight = window.innerHeight - 50;
    this.popupHijosWidth = window.innerWidth - 50;
    this.verHijosVisible = false;
    this.poliza = this.polizaService.getPoliza();
    this.cliente = this.polizaService.getCliente();
    this.hijo = this.polizaService.getHijo();

    this.dataSourceService.getTipoDni().then((response) => {
      this.tipoDocDataSource = new ArrayStore({
        key: 'id',
        data: response
      });
    }).catch(error => {
      console.log(error);
    });

    this.dataSourceService.getFormasPago().then((response) => {
      this.formaPagoDataSource = new ArrayStore({
        key: 'id',
        data: response
      });
    }).catch(error => {
      console.log(error);
    });

    this.dataSourceService.getSexos().then((response) => {
      this.sexoDataSource = new ArrayStore({
        key: 'id',
        data: response
      });
    }).catch(error => {
      console.log(error);
    });

    this.dataSourceService.getEstadoCivil().then((response) => {
      this.estadoCivilDataSource = new ArrayStore({
        key: 'id',
        data: response
      });
    }).catch(error => {
      console.log(error);
    });

    this.dataSourceService.getCondicionesIva().then((response) => {
      this.condicionIvaDataSource = new ArrayStore({
        key: 'id',
        data: response.items
      });
    }).catch(error => {
      console.log(error);
    });

    this.dataSourceService.getLocalidades().then((response) => {
      this.localidadDataSource = new ArrayStore({
        key: 'id',
        data: response
      });
    }).catch(error => {
      console.log(error);
    });

    this.dataSourceService.getProvincias().then((response) => {
      this.provinciaDataSource = new ArrayStore({
        key: 'id',
        data: response
      });
    }).catch(error => {
      console.log(error);
    });

    this.medidasSeguridadDataSource = new ArrayStore ({
      key: 'id',
      data: this.dataSourceService.getMedidasSeguridad()
    });

  }

  buscarCliente() {
    this.polizaService.getClienteById(15).then((response) => {
      this.poliza.cliente = response;
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
    console.log("boton apretado");
    this.verHijosVisible = true;
  }

  medidasSeguridadChanged($event) {
    console.log($event);
    if ($event.itemData.selected) {
      //this.usuario.delegaciones.push($event.itemData);
    }
    else {
      //this.usuario.delegaciones.splice($event.itemData.itemIndex, 1);
    }

  }



}
